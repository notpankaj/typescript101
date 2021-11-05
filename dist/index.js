"use strict";
// ##   Basic Types
let id = 69;
let company = "JOD";
let isPublished = true;
let x = "Hello";
x = false;
// ##   ARRAYS
let ids = [1, 2, 3, 4, 5, 6];
ids.push(34);
// ids.push('34') //error
let strings = ["a", "b", "c", "1", "2"];
let any = ["a", "b", "c", 1, 2];
// ##    Tuple
let person = [1, "r", true];
// let person: [number, string, boolean] = [1, "r", true, "extra"] // ERROR
// ##   Tuple Array
let employee;
employee = [
    [1, "apple"],
    [2, "orange"],
    [3, "peach"],
    [4, "banana"],
];
// ##   Union
let test_id;
test_id = "xyz";
test_id = 123;
// test_id = false  //ERROR
// ##   Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
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
var Direction2;
(function (Direction2) {
    Direction2[Direction2["up"] = 1] = "up";
    Direction2[Direction2["down"] = 2] = "down";
    Direction2[Direction2["left"] = 3] = "left";
    Direction2[Direction2["right"] = 4] = "right";
})(Direction2 || (Direction2 = {}));
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
var DirectionStr;
(function (DirectionStr) {
    DirectionStr["up"] = "UP";
    DirectionStr["down"] = "DOWN";
    DirectionStr["left"] = "left";
    DirectionStr["right"] = "right";
})(DirectionStr || (DirectionStr = {}));
console.log(DirectionStr);
const user = {
    id: 1,
    name: "Jhon",
};
// -------------------------
// TYPE Assertion
// -------------------------
let cid = 1;
// let customerId = cid;
// let customerId = <number>cid;
// - OR -
let customerId = cid;
// customerId = true; //made an error on <number>
// -------------------------
// Function's
// -------------------------
function addNum(x, y) {
    return x + y; //return should be number type
}
// console.log(addNum(4, "4"));
console.log(addNum(4, 4));
// function with NO return
// VOID type
function log(msg) {
    console.log(msg);
}
log("abc");
log(123);
const UserX = {
    id: 9090,
    Uid: 0.9,
    name: "UIUIU",
    age: 1,
};
const UserY = {
    id: 898,
    Uid: 9090,
    name: "nj",
};
UserY.id = 88; //changed
const p1 = 1;
// const addNumber: mathFunc = (x: number, y: string): boolean => x + y; //error
const addNumber = (x, y) => x + y;
// we dont use  class Person : PersonInterface {
// we user implements keyword
class Person {
    constructor(id, name) {
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
    constructor(id, name, postion) {
        super(id, name); //initilize in person class's consrutore
        this.postion = postion;
    }
}
const emp1 = new Employee(3, "shawn", "dev");
console.log(emp1);
console.log(emp1.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["1", "2", "3", "4"]);
// numArray.push("hello"); //err because it expexcts a number
numArray.push(4);
// strArray.push(4); //err because it expexcts a number
strArray.push("op");
