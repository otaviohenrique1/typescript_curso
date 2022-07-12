import "reflect-metadata";

/*
# Introdução
Com a introdução de Classes em TypeScript e ES6, agora existem certos cenários que exigem recursos adicionais para dar suporte à anotação ou modificação de classes e membros de classe. Os decoradores fornecem uma maneira de adicionar anotações e uma sintaxe de metaprogramação para declarações de classe e membros. Decoradores são uma proposta de estágio 2 para JavaScript e estão disponíveis como um recurso experimental do TypeScript.
*/

/*
# Decoradores
Um Decorator é um tipo especial de declaração que pode ser anexada a uma declaração de classe , método , acessador , propriedade ou parâmetro . Decoradores usam o formulário @expression, onde expressiondeve avaliar uma função que será chamada em tempo de execução com informações sobre a declaração decorada.
*/

/*
  # Tipos de decorators
  1 - Class Decorator.
  2 - Property Decorator.
  3 - Method Decorator.
  4 - Accessor Decorator.
  5 - Parameter Decorator.
*/

export function item_03_decorators() {
  console.log("item_03_decorators");
}

/* Exemplo 1 - Decorator */
function sealed1(target: any) {
  console.log(target);
}

@sealed1
class Foo { }

/* Exemplo 2 - Decorator Factories */
/*  Uma Fábrica de Decoradores é simplesmente uma função que retorna a expressão que será chamada pelo decorador em tempo de execução. */
function color(value: string) {
  return function (target: any) {};
}

function log(prefix: any) {
  return (target: any) => {
    console.log(`${prefix} - ${target}`);
  }
}

@log('Awesome')
class Foo2 {}

// Awesome - function Foo() {
// }

/* Exemplo 3 - Decorator Composition */
function first() {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}
 
class ExampleClass {
  @first()
  @second()
  method() {}
}

/* Exemplo 4 - Decorator Evaluation */
/*
  Há uma ordem bem definida de como os decoradores aplicados a várias declarações dentro de uma classe são aplicados:
    - Decoradores de parâmetro , seguidos por Method , Accessor ou Property Decorators são aplicados para cada membro de instância.
    - Decoradores de parâmetro , seguidos por Method , Accessor ou Property Decorators são aplicados para cada membro estático.
    - Decoradores de parâmetro são aplicados para o construtor.
    - Decoradores de classe são aplicados para a classe.
*/

/* Exemplo 5 - Class Decorators */
/* Um Decorador de Classe é declarado imediatamente antes de uma declaração de classe. O decorador de classe é aplicado ao construtor da classe e pode ser usado para observar, modificar ou substituir uma definição de classe. Um decorador de classe não pode ser usado em um arquivo de declaração ou em qualquer outro contexto de ambiente (como em uma declareclasse). */
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

/* Exemplo 6 - Method Decorators */
/* Um Method Decorator é declarado imediatamente antes de uma declaração de método. O decorador é aplicado ao Descritor de Propriedade do método e pode ser usado para observar, modificar ou substituir uma definição de método. Um decorador de método não pode ser usado em um arquivo de declaração, em uma sobrecarga ou em qualquer outro contexto de ambiente (como em uma declareclasse). */
function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
 
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

/* Exemplo 7 - Accessor Decorators */
/* Um Accessor Decorator é declarado imediatamente antes de uma declaração de acessador. O decorador de acessador é aplicado ao Descritor de propriedade para o acessador e pode ser usado para observar, modificar ou substituir as definições de um acessador. Um decorador de acessador não pode ser usado em um arquivo de declaração ou em qualquer outro contexto de ambiente (como em uma declareclasse). */
function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.configurable = value;
  };
}

class Point {
  private _x: number;
  private _y: number;
  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
 
  @configurable(false)
  get x() {
    return this._x;
  }
 
  @configurable(false)
  get y() {
    return this._y;
  }
}

/* Exemplo 8 - Property Decorators */
/* Um Property Decorator é declarado imediatamente antes de uma declaração de propriedade. Um decorador de propriedade não pode ser usado em um arquivo de declaração ou em qualquer outro contexto de ambiente (como em uma declareclasse). */

import "reflect-metadata";

class Greeter2 {
  @format("Hello, %s")
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }
}

const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

/* Exemplo 9 - Parameter Decorators */
/* Um Parameter Decorator é declarado imediatamente antes de uma declaração de parâmetro. O decorador de parâmetro é aplicado à função para um construtor de classe ou declaração de método. Um decorador de parâmetro não pode ser usado em um arquivo de declaração, uma sobrecarga ou em qualquer outro contexto de ambiente (como em uma declareclasse). */
// const requiredMetadataKey = Symbol("required");
 
// function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//   let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//   existingRequiredParameters.push(parameterIndex);
//   Reflect.defineMetadata( requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }
 
// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//   let method = descriptor.value!;
 
//   descriptor.value = function () {
//     let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//     if (requiredParameters) {
//       for (let parameterIndex of requiredParameters) {
//         if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//           throw new Error("Missing required argument.");
//         }
//       }
//     }
//     return method.apply(this, arguments);
//   };
// }

// class BugReport2 {
//   type = "report";
//   title: string;
 
//   constructor(t: string) {
//     this.title = t;
//   }
 
//   @validate
//   print(@required verbose: boolean) {
//     if (verbose) {
//       return `type: ${this.type}\ntitle: ${this.title}`;
//     } else {
//      return this.title; 
//     }
//   }
// }

/* Exemplo 10 - Metadata */
/*
Alguns exemplos usam a reflect-metadatabiblioteca que adiciona um polyfill para uma API de metadados experimental . Esta biblioteca ainda não faz parte do padrão ECMAScript (JavaScript). No entanto, assim que os decoradores forem oficialmente adotados como parte do padrão ECMAScript, essas extensões serão propostas para adoção.
Você pode instalar esta biblioteca via npm:
npm i reflect-metadata --save
*/
class Point2 {
  constructor(public x: number, public y: number) {}
}
 
class Line {
  private _start!: Point;
  private _end!: Point;
 
  @validate
  set start(value: Point) {
    this._start = value;
  }
 
  get start() {
    return this._start;
  }
 
  @validate
  set end(value: Point) {
    this._end = value;
  }
 
  get end() {
    return this._end;
  }
}
 
function validate<T>(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<T>) {
  let set = descriptor.set!;
  
  descriptor.set = function (value: T) {
    let type = Reflect.getMetadata("design:type", target, propertyKey);
 
    if (!(value instanceof type)) {
      throw new TypeError(`Invalid type, got ${typeof value} not ${type.name}.`);
    }
 
    set.call(this, value);
  };
}
 
const line = new Line()
line.start = new Point(0, 0)

class Line2 {
  private _start!: Point;
  private _end!: Point;
  @validate
  @Reflect.metadata("design:type", Point)
  set start(value: Point) {
    this._start = value;
  }
  get start() {
    return this._start;
  }
  @validate
  @Reflect.metadata("design:type", Point)
  set end(value: Point) {
    this._end = value;
  }
  get end() {
    return this._end;
  }
}
