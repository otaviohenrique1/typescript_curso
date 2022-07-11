export function item_05_keyof() {
  console.log("item_05_keyof");
}

/*
  O keyof operador de tipo => O keyofoperador pega um tipo de objeto e produz uma string ou união literal numérica de suas chaves. O seguinte tipo P é do mesmo tipo que “x” | “y”.
  (The keyof type operator => The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”.)
*/

/* Exemplo 1 */
type Point = { x: number; y: number };
type P = keyof Point;

/* Exemplo 2 */
type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

/* Exemplo 3 */
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

/* Exemplo 4 */
interface Exemplo1 {
  lista1: {
    [k: string]: string;
  };
}
