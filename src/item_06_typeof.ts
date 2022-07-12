export function item_09_typeof() {
  console.log("item_09_typeof");
}

/*
  O typeof operador de tipo => JavaScript já tem um typeofoperador que você pode usar em um contexto de expressão.
  (The typeof type operator => JavaScript already has a typeof operator you can use in an expression context.)
*/

/* Verifica o tipo de uma variável ou propriedade */

/* Exemplo 1 */
console.log(typeof "Hello world");

/* Exemplo 2 */
let s = "hello";
let n: typeof s;

/* Exemplo 3 */
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
// ReturnType => Obter o tipo de retorno da função (Obtain the return type of a function type)

/* Exemplo 4 */
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
