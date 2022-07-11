let tipo_numero: number = 1;
let tipo_texto: string = "string";
let tipo_booleano: boolean = true;
let tipo_any: any = 1 + "tipo_any" + true;
let tipo_null = null;
let tipo_undefined = undefined;
let tipo_array = ['1', '2', 3, 4];
let tipo_array_object = [{item: '1'}, {item: '2'}, {item: 3}, {item: 4}];
let tipo_object = {item1: '1', item2: '2', item3: 3, item4: 4};

function soma2numeros(valor_1: number, valor_2: number): number {
  return valor_1 + valor_2;
}

export function item_01_basicos() {
  // console.log("item_01_basicos");
  // for (let index = 0; index <= 10; index++) {
  //   console.log(`index => [${index}]`);
  // }

  [0,1,2,3,4,5,6,7,8,9].forEach((item, index) => {
    console.log(`[${index}] => [${item}]`);
  });
}