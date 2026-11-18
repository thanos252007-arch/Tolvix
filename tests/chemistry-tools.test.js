const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const source = fs.readFileSync(
  path.join(__dirname, "..", "assets", "chemistry-tools.js"),
  "utf8"
);
const start = source.indexOf("const E=[");
const end = source.indexOf("function num(");
assert.notEqual(start, -1, "element table must exist");
assert.notEqual(end, -1, "formula parser section must exist");

const chemistry = new Function(
  source.slice(start, end) + "return { E, masses, parseFormula, mm };"
)();

test("element table contains all 118 recognized elements", () => {
  assert.equal(chemistry.E.length, 118);
  assert.equal(Object.keys(chemistry.masses).length, 118);
});

for (const [formula, expected] of [
  ["H2O", 18.015],
  ["Ca(OH)2", 74.092],
  ["CuSO4·5H2O", 249.677],
  ["Al2(SO4)3", 342.131077],
  ["K4[Fe(CN)6]", 368.3462],
  ["C6H12O6", 180.156],
]) {
  test("molar mass for " + formula, () => {
    assert.ok(Math.abs(chemistry.mm(formula) - expected) < 0.00001);
  });
}

test("nested groups and square brackets are counted", () => {
  assert.deepEqual(chemistry.parseFormula("K4[Fe(CN)6]"), {
    K: 4, Fe: 1, C: 6, N: 6
  });
});

test("hydrate multiplier is applied to the complete hydrate component", () => {
  assert.deepEqual(chemistry.parseFormula("CuSO4·5H2O"), {
    Cu: 1, S: 1, O: 9, H: 10
  });
});

for (const invalid of ["Xx2", "Ca()2", "Mg(OH", "2H2O", "H0", "H2O+"]) {
  test("rejects invalid formula " + invalid, () => {
    assert.throws(() => chemistry.parseFormula(invalid));
  });
}
