export function item_10_generics_1() {
  console.log("item_10_generics_1");
}

/* ------Básico generics(genérico)------ */
/* Básico generics(genérico) */
function generic1<Type>(arg: Type): Type {
  return arg;
}
let generic1_output1 = generic1<string>("generic1");
let generic1_output2 = generic1<number>(2);
let generic1_output3 = generic1("generic1");
let generic1_output4 = generic1(2);
/* ------------------------ */
/* ------Variáveis ​​de tipo generic(genérico)------ */
/* Variáveis ​​de tipo generic(genérico) */
function generic2<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
generic2([0,1,2,3,4,5,6,7,8,9]);

function generic3<Type>(arg: Array<Type>): Array<Type> {
  console.log(arg.length);
  return arg;
}
generic3([0,1,2,3,4,5,6,7,8,9]);
/* ------------------------ */
/* ------Tipos generics(genéricos)------ */
function generic4<Type>(arg: Type): Type {
  return arg;
}
let generic4_output1: <Type>(arg: Type) => Type = generic4;
let generic4_output2: <Input>(arg: Input) => Input = generic4;
let generic4_output3: { <Type>(arg: Type): Type } = generic4;
/* ------------------------ */
/* ------Tipos generics(genéricos) com interface - basico------ */
interface Generic5Interface {
  <Type>(arg: Type): Type;
}
function generic5<Type>(arg: Type): Type {
  return arg;
}
let generic5_output1: Generic5Interface = generic5;
/* ------------------------ */
/* ------Tipos generics(genéricos) com interface com tipo------ */
interface Generic6Interface<Type> {
  (arg: Type): Type;
}
function generic6<Type>(arg: Type): Type {
  return arg;
}
let generic6_output1: Generic6Interface<number> = generic6;
/* ------------------------ */
/* ------Classes generics(genéricas)------ */
class Generic7Number<NumType> {
  zeroValor!: NumType;
  soma!: (x: NumType, y: NumType) => NumType;
}

let generic7NumberOutput = new Generic7Number<number>();
generic7NumberOutput.zeroValor = 0;
generic7NumberOutput.soma = function(x, y) {
  return x + y;
};

let generic7StringOutput = new Generic7Number<string>();
generic7StringOutput.zeroValor = "";
generic7StringOutput.soma = function(x, y) {
  return x + y;
};
console.log(generic7StringOutput.soma(generic7StringOutput.zeroValor, "test"));
/* ------------------------ */
/* ------Restrições generics(genéricas)------ */
interface Lengthwise {
  length: number;
}
function generic8<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
generic8({ length: 10, value: 3 });
/* ------------------------ */
/* ------Usando parâmetros de tipo em restrições generics(genéricas)------ */
function generic9<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
generic9({ a: 1, b: 2, c: 3, d: 4 }, "a");
// getProperty(x, "m");
/* ------------------------ */
/* ------Usando tipos de classe em generics (genéricos)------ */
function create<Type>(c: { new (): Type }): Type {
  return new c();
}
class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nametag: string = "Mikle";
}
 
class Animal {
  numLegs: number = 4;
}
 
class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}
 
class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}
 
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}
 
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
/* ------------------------ */