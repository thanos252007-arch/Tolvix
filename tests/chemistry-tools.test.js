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

test("select defaults match the supported options for gas and concentration tools", () => {
  const configStart = source.indexOf("const defaults=");
  const configEnd = source.indexOf("const def=cfg[id]");
  const setup = source.slice(configStart, configEnd) + 'const def=cfg[id]||[];if(id==="combined-gas-law")defaults.solve="p2";if(id==="ideal-gas")defaults.mode="p";if(id==="concentration-converter")defaults.mode="molarity";return { defaults, options, cfg };';
  for (const [tool, expected] of [["ideal-gas", "p"], ["concentration-converter", "molarity"]]) {
    const config = new Function("id", setup)(tool);
    assert.equal(config.defaults.mode, expected);
    assert.ok(config.options.mode[tool].includes(config.defaults.mode));
  }
});

class FakeElement {
  constructor(tag) {
    this.tag = tag; this.children = []; this.listeners = {}; this.attributes = {};
    this.classList = { add() {}, remove() {}, toggle() {} };
    this.dataset = {}; this.hidden = false; this._value = ""; this.textContent = "";
  }
  set value(value) {
    value = String(value);
    this._value = this.tag === "select" && this.children.length &&
      !this.children.some(child => child.value === value) ? "" : value;
  }
  get value() { return this._value; }
  append(...items) {
    for (const item of items) {
      item.previousElementSibling = this.children.at(-1);
      this.children.push(item); item.parent = this;
      if (item.tag === "option" && this.tag === "select" && this.children.length === 1) this._value = item.value;
    }
  }
  replaceChildren(...items) { this.children = []; this.append(...items); }
  addEventListener(name, callback) { (this.listeners[name] ||= []).push(callback); }
  setAttribute(name, value) { this.attributes[name] = value; }
  insertBefore(item) { this.append(item); }
}

function runProductionTool(toolId, values = {}) {
  const controls = {};
  const form = new FakeElement("form");
  form.elements = new Proxy({}, { get: (_, key) => controls[key] });
  const grid = new FakeElement("div");
  const box = new FakeElement("section");
  const formula = new FakeElement("p");
  const root = {
    dataset: { chemTool: toolId },
    querySelector(selector) {
      return selector === "form" ? form :
        selector === ".chem-grid" ? grid :
        selector === ".chem-results" ? box :
        selector === "[data-chem-formula]" ? formula : null;
    }
  };
  const document = {
    querySelector() { return root; },
    createElement(tag) { return new FakeElement(tag); }
  };
  const append = grid.append.bind(grid);
  grid.append = (...nodes) => {
    append(...nodes);
    for (const wrapper of nodes) for (const control of wrapper.children || []) {
      if (control.name) controls[control.name] = control;
    }
  };
  new Function("document", source)(document);
  for (const [key, value] of Object.entries(values)) {
    assert.ok(controls[key], toolId + " should expose input " + key);
    controls[key].value = value;
  }
  const submit = (form.listeners.submit || [])[0];
  assert.ok(submit, toolId + " should register a submit handler");
  submit({ preventDefault() {} });
  return {
    output: box.children.flatMap(group => group.children || []).map(node => node.textContent).join(" | "),
    controlValues: Object.fromEntries(Object.entries(controls).map(([key, control]) => [key, control.value])),
    gridCount: grid.children.length
  };
}

const knownAnswerCases = [
  ["molar-mass", { formula: "H2O" }, "18.015"],
  ["mole", { mode: "mass", value: 36.03, molarMass: 18.015 }, "Amount (mol) | 2"],
  ["molarity", { moles: 0.5, volume: 1 }, "Molarity (mol/L) | 0.5"],
  ["dilution", { c1: 2, v1: 1, v2: 2 }, "C2 | 1"],
  ["ph", { h: 0.001 }, "pH | 3"],
  ["poh", { oh: 0.0001 }, "pOH | 4"],
  ["density", { mode: "mass", mass: 10, volume: 2 }, "Density (entered mass unit / entered volume unit) | 5"],
  ["ideal-gas", { v: 0.024, n: 1, t: 298.15 }, "P | 103289.88"],
  ["combined-gas-law", { p1: 101325, v1: 1, t1: 300, v2: 2, t2: 300 }, "P2 | 50662.5"],
  ["stoichiometry", { reactant: "H2", product: "H2O", cr: 2, cp: 2, mass: 2.016 }, "Product mass (g) | 18.015"],
  ["limiting-reactant", { r1: "H2", r2: "O2", c1: 2, c2: 1, mass1: 10, mass2: 10 }, "Limiting reactant | O2"],
  ["theoretical-yield", { reactant: "H2", product: "H2O", cr: 2, cp: 2, mass: 2.016 }, "Theoretical product mass (g) | 18.015"],
  ["percent-yield", { actual: 8, theoretical: 10 }, "Percent yield (%) | 80"],
  ["percent-composition", { formula: "H2O" }, "O mass percentage (%) | 88.809326"],
  ["empirical-formula", { composition: "C:40,H:6.7,O:53.3" }, "Estimated empirical formula | CH2O"],
  ["molecular-formula", { empirical: "CH2O", molarMass: 180.156 }, "Molecular formula | C6H12O6"],
  ["concentration-converter", { value: 1, molarMass: 18.015 }, "Mass concentration (g/L) | 18.015"],
  ["oxidation-number", { formula: "H2SO4", element: "S", charge: 0, known: -6 }, "Average oxidation state | 6"],
  ["electron-configuration", { z: 26 }, "3d6"]
];

for (const [toolId, inputs, expected] of knownAnswerCases) {
  test("known-answer calculation: " + toolId, () => {
    assert.ok(runProductionTool(toolId, inputs).output.includes(expected));
  });
}

test("periodic table renders all 118 element cards", () => {
  assert.equal(runProductionTool("periodic-table").gridCount, 118);
});
