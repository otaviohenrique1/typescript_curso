export function item_10_generics_2() {
  console.log("item_10_generics_2");
}

interface Exemplo1<T> {
  param1: number;
  param2: T;
  param3: [T];
  param4: [string];
}