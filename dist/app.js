"use strict";
//basic
var id = 5;
let company = 'codewalla';
let isPub = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'k'];
//tuple
let person = [1, 'brad', true];
let employee;
employee = [
    [1, 'king'],
    [4, 'shuk'],
    [6, 'shake'],
    [56, 'frag'],
];
//Union
let pid = 22;
pid = 2;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
