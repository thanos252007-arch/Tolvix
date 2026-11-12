(function(root){
const G=9.80665, C=343;
function calc(id,x){
const n=k=>Number(x[k]), pos=(k)=>{const v=n(k);if(!Number.isFinite(v)||v<=0)throw Error(k+" must be greater than zero");return v;}, finite=(k)=>{const v=n(k);if(!Number.isFinite(v))throw Error(k+" must be a finite number");return v;}, rad=d=>d*Math.PI/180, out={};
switch(id){
case "projectile-motion":{const v=pos("speed"),a=finite("angle"),g=pos("gravity");if(a<0||a>90)throw Error("Angle must be between 0° and 90°.");const t=2*v*Math.sin(rad(a))/g;out["Flight time (s)"]=t;out["Maximum height (m)"]=v*v*Math.sin(rad(a))**2/(2*g);out["Horizontal range (m)"]=v*v*Math.sin(2*rad(a))/g;break}
case "kinematics":{const u=finite("u"),a=finite("a"),t=pos("t");out["Final velocity (m/s)"]=u+a*t;out["Displacement (m)"]=u*t+.5*a*t*t;out["Average velocity (m/s)"]=u+.5*a*t;break}
case "free-fall":{const t=pos("t"),g=pos("g");out["Fall distance (m)"]=.5*g*t*t;out["Final speed (m/s)"]=g*t;break}
case "vector":{const m=finite("magnitude"),a=finite("angle");if(m<0)throw Error("Vector magnitude must be non-negative.");out["Horizontal component"]=m*Math.cos(rad(a));out["Vertical component"]=m*Math.sin(rad(a));break}
case "inclined-plane":{const m=pos("mass"),a=finite("angle"),mu=finite("mu"),g=pos("g");if(a<0||a>=90||mu<0)throw Error("Use 0° ≤ angle < 90° and a non-negative friction coefficient.");const normal=m*g*Math.cos(rad(a)),acc=g*(Math.sin(rad(a))-mu*Math.cos(rad(a)));out["Normal force (N)"]=normal;out["Acceleration down slope (m/s²)"]=acc;out["Net force down slope (N)"]=m*acc;break}
case "circular-motion":{const v=finite("v"),r=pos("r"),m=pos("m");out["Centripetal acceleration (m/s²)"]=v*v/r;out["Centripetal force (N)"]=m*v*v/r;break}
case "newtons-second-law":{const m=pos("m"),a=finite("a");out["Net force (N)"]=m*a;out["Mass (kg)"]=m;out["Acceleration (m/s²)"]=a;break}
case "work-energy-power":{const F=finite("F"),d=finite("d"),ang=finite("angle"),t=pos("t"),m=pos("m"),v=finite("v");out["Work (J)"]=F*d*Math.cos(rad(ang));out["Kinetic energy (J)"]=.5*m*v*v;out["Average power from force (W)"]=F*d*Math.cos(rad(ang))/t;break}
case "momentum-collision":{const m1=pos("m1"),m2=pos("m2"),v1=finite("v1"),v2=finite("v2"),p=m1*v1+m2*v2,mt=m1+m2;out["Initial total momentum (kg·m/s)"]=p;out["Combined mass (kg)"]=mt;out["Final velocity (m/s)"]=p/mt;out["Kinetic energy lost (J)"]=.5*m1*v1*v1+.5*m2*v2*v2-.5*mt*(p/mt)**2;break}
case "spring-shm":{const m=pos("m"),k=pos("k"),T=2*Math.PI*Math.sqrt(m/k);out["Period (s)"]=T;out["Frequency (Hz)"]=1/T;break}
case "pendulum":{const L=pos("L"),g=pos("g"),T=2*Math.PI*Math.sqrt(L/g);out["Period (s)"]=T;out["Frequency (Hz)"]=1/T;break}
case "wave":{const f=pos("f"),lam=pos("lambda");out["Wave speed (m/s)"]=f*lam;out["Frequency (Hz)"]=f;out["Wavelength (m)"]=lam;break}
case "doppler":{const f=pos("f"),vs=finite("vs"),c=pos("c");if(vs<0||vs>=c)throw Error("Source speed toward observer must be from 0 up to (but not including) sound speed.");out["Observed frequency (Hz)"]=f*c/(c-vs);break}
case "ohms-law":{const V=finite("V"),I=finite("I");if(V<0||I<0)throw Error("Voltage and current must be non-negative.");if(I===0)throw Error("Current must be above zero to calculate resistance.");out["Resistance (Ω)"]=V/I;out["Power (W)"]=V*I;break}
case "resistors":{const a=pos("r1"),b=pos("r2"),c=pos("r3");out["Series resistance (Ω)"]=a+b+c;out["Parallel resistance (Ω)"]=1/(1/a+1/b+1/c);break}
case "lens-mirror":{const f=finite("f"),u=pos("u");if(f===0)throw Error("Focal length cannot be zero.");const den=1/f-1/u;if(Math.abs(den)<1e-14)throw Error("Image is at infinity for these inputs.");const v=1/den;out["Image distance (m)"]=v;out["Magnification"]=-v/u;break}
case "snells-law":{const n1=pos("n1"),n2=pos("n2"),a=finite("angle");if(a<0||a>=90)throw Error("Incident angle must be from 0° up to (but not including) 90°.");const s=n1/n2*Math.sin(rad(a));if(s>1){out["Result"]="Total internal reflection";out["Critical angle (degrees)"]=Math.asin(n2/n1)*180/Math.PI;}else out["Refraction angle (degrees)"]=Math.asin(s)*180/Math.PI;break}
case "uncertainty":{const a=pos("a"),da=finite("da"),b=pos("b"),db=finite("db");if(da<0||db<0)throw Error("Uncertainties must be non-negative.");const v=a*b,rel=Math.sqrt((da/a)**2+(db/b)**2);out["Product"]=v;out["Absolute uncertainty"]=Math.abs(v)*rel;out["Relative uncertainty (%)"]=rel*100;break}
case "significant-figures":{const v=finite("value"),sf=n("sf");if(!Number.isInteger(sf)||sf<1||sf>15)throw Error("Significant figures must be an integer from 1 to 15.");if(v===0){out["Rounded value"]="0";break}const places=sf-1-Math.floor(Math.log10(Math.abs(v)));const rounded=Number(v.toFixed(Math.max(0,Math.min(100,places))));out["Rounded value"]=rounded.toPrecision(sf);break}
case "unit-converter":{const v=finite("value"),from=String(x.from),to=String(x.to),units={m:1,km:1000,cm:.01,mm:.001,mi:1609.344,ft:.3048,kg:1,g:.001,lb:.45359237,s:1,min:60,h:3600,"m/s":1,"km/h":1/3.6,"mph":.44704,J:1,kJ:1000,cal:4.184};if(!(from in units)||!(to in units))throw Error("Choose supported units: m, km, cm, mm, mi, ft, kg, g, lb, s, min, h, m/s, km/h, mph, J, kJ or cal.");const group=u=>u==="m"||u==="km"||u==="cm"||u==="mm"||u==="mi"||u==="ft"?"length":["kg","g","lb"].includes(u)?"mass":["s","min","h"].includes(u)?"time":["m/s","km/h","mph"].includes(u)?"speed":"energy";if(group(from)!==group(to))throw Error("Units must belong to the same category.");out["Converted value"]=v*units[from]/units[to];out["Unit"]=to;break}
default:throw Error("Unknown calculator.");
}
for(const [k,v] of Object.entries(out))if(typeof v==="number"&&!Number.isFinite(v))throw Error("This input combination does not produce a finite result.");
return out;
}
const api={calc};root.TolvixPhysics=api;if(typeof module!=="undefined"&&module.exports)module.exports=api;
})(typeof globalThis!=="undefined"?globalThis:this);