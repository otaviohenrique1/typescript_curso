export function item_04_enum() {
  console.log("item_04_enum");
}

/* Exemplo 1 - Numeric enums */
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

/* Exemplo 2 - Numeric enums */
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

/* Exemplo 3 - Numeric enums */
enum UserResponse {
  No = 0,
  Yes = 1,
}

/* Exemplo 4 - Numeric enums */
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

/* Exemplo 5 - Heterogeneous enums */
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

/* Exemplo 6 - Computed and constant members */
enum E {
  X,
}
E.X;

enum E1 {
  X,
  Y,
  Z,
}
E1.X;
 
enum E2 {
  A = 1,
  B,
  C,
}
E2.A;

enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}
FileAccess.G;

/* Exemplo 7 - Union enums and enum member types */
enum ShapeKind {
  Circle,
  Square,
}
 
interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
 
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
let c: Circle = {
  kind: ShapeKind.Circle,
  radius: 100,
};

/* Exemplo 8 - Enums at runtime */
enum E3 {
  X,
  Y,
  Z,
}
 
function f(obj: { X: number }) {
  return obj.X;
}

f(E3);

/* Exemplo 9 - Enums at compile time */
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type LogLevelStrings = keyof typeof LogLevel;
 
function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");

/* Exemplo 10 - Reverse mappings */
enum Enum1 {
  A,
}
 
let a = Enum1.A;
let nameOfA = Enum1[a];

/* Exemplo 11 - const enums */
const enum Enum2 {
  A = 1,
  B = A * 2,
}

const enum Direction3 {
  Up,
  Down,
  Left,
  Right,
}
 
let directions = [
  Direction3.Up,
  Direction3.Down,
  Direction3.Left,
  Direction3.Right,
];

/* Exemplo 12 - Ambient enums */
declare enum Enum {
  A = 1,
  B,
  C = 2,
}

/* Exemplo 13 - Objects vs Enums */
const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}
 
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
 
EDirection.Up;
ODirection.Up;

function walk(dir: EDirection) {}

type Direction4 = typeof ODirection[keyof typeof ODirection];
function run(dir: Direction4) {}
 
walk(EDirection.Left);
run(ODirection.Right);
