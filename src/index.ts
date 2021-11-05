// ##   Basic Types
let id: number = 69;
let company: string = "JOD";
let isPublished: Boolean = true;
let x: any = "Hello";
x = false;

// ##   ARRAYS
let ids: number[] = [1, 2, 3, 4, 5, 6];
ids.push(34);
// ids.push('34') //error

let strings: string[] = ["a", "b", "c", "1", "2"];
let any: any[] = ["a", "b", "c", 1, 2];

// ##    Tuple
let person: [number, string, boolean] = [1, "r", true];
// let person: [number, string, boolean] = [1, "r", true, "extra"] // ERROR

// ##   Tuple Array
let employee: [number, string][];
employee = [
  [1, "apple"],
  [2, "orange"],
  [3, "peach"],
  [4, "banana"],
];

// ##   Union
let test_id: string | number;
test_id = "xyz";
test_id = 123;
// test_id = false  //ERROR

// ##   Enum
enum Direction1 {
  up,
  down,
  left,
  right,
}
//up will have value 0
console.log(Direction1);
// {
//     "0": "up",
//     "1": "down",
//     "2": "left",
//     "3": "right",
//     "up": 0,
//     "down": 1,
//     "left": 2,
//     "right": 3
// }

enum Direction2 {
  up = 1,
  down,
  left,
  right,
}
//up will have value 1
console.log(Direction2);
// {
//     "1": "up",
//     "2": "down",
//     "3": "left",
//     "4": "right",
//     "up": 1,
//     "down": 2,
//     "left": 3,
//     "right": 4
// }

enum DirectionStr {
  up = "UP",
  down = "DOWN",
  left = "left",
  right = "right",
}
console.log(DirectionStr);
// {
//     "up": "UP",
//     "down": "DOWN",
//     "left": "left",
//     "right": "right"
// }

// ## OBJECTS
// const user: {
//   id: number;
//   name: string;
// } = {
//   id: 1,
//   name: "jhon",
// };

// Cleaner Way

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Jhon",
};

// -------------------------
// TYPE Assertion
// -------------------------
let cid: any = 1;

// let customerId = cid;
// let customerId = <number>cid;

// - OR -
let customerId = cid as number;

// customerId = true; //made an error on <number>

// -------------------------
// Function's
// -------------------------
function addNum(x: number, y: number): number {
  return x + y; //return should be number type
}
// console.log(addNum(4, "4"));
console.log(addNum(4, 4));

// function with NO return
// VOID type

function log(msg: string | number): void {
  console.log(msg);
}

log("abc");
log(123);
// -------------------------
// interfaces
// -------------------------

interface UserInterface {
  id: number; // changeAble
  readonly Uid: number; // not changeble READ ONLY
  name: string;
  // age: number; //required;
  age?: number; //optional
}

const UserX: UserInterface = {
  id: 9090,
  Uid: 0.9,
  name: "UIUIU",
  age: 1,
};
const UserY: UserInterface = {
  id: 898,
  Uid: 9090,
  name: "nj",
};

UserY.id = 88; //changed
// UserY.Uid = 88; //error

// we cannot use primitives and unions with interface
// interface Point = number | string;
// const p1: Point = 1;

//creating custome data type
type Point = number | string;
const p1: Point = 1;

//------------
// function Interface
//------------

interface mathFunc {
  (x: number, y: number): number;
}

// const addNumber: mathFunc = (x: number, y: string): boolean => x + y; //error
const addNumber: mathFunc = (x: number, y: number): number => x + y;

//------------
// classes
//------------

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

// we dont use  class Person : PersonInterface {

// we user implements keyword
class Person implements PersonInterface {
  // private id: number; // can only be access within this class
  // protected id: number; // can only be access within this class or extended class
  id: number; // can only be access within this class or extended class
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registerd`;
  }
}

const mike = new Person(1, "mike");
const mew = new Person(2, "mew");

// mike.id = 5; //changeable due to pulic access modifer
console.log(mike);
console.log(mew);

console.log(mike.register());

class Employee extends Person {
  postion: string;

  constructor(id: number, name: string, postion: string) {
    super(id, name); //initilize in person class's consrutore
    this.postion = postion;
  }
}

const emp1 = new Employee(3, "shawn", "dev");
console.log(emp1);
console.log(emp1.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["1", "2", "3", "4"]);

// numArray.push("hello"); //err because it expexcts a number
numArray.push(4);
// strArray.push(4); //err because it expexcts a number
strArray.push("op");
