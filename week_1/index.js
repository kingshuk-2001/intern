console.log("internship")
//window.alert("hello")

//this is a comment
/*
multi
line
cmnt
*/


//number
let age;
age =21;

//string
let name = "kingshuk"

//boolean
student = true;

console.log(age+1)
console.log(name+1)
console.log(student)


document.getElementById("p1").innerHTML = name;
document.getElementById("p2").innerHTML = age;
document.getElementById("p3").innerHTML = "student? = "+ student ;


//input

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello"+ username
}

//let num = window.prompt("give input")

//type conversion

let num = 4;
console.log(num, typeof num)
num = Number(num)
console.log(num, typeof num)
num = Boolean(num);
console.log(num, typeof num)

//Math functions

x =-3.14

x= Math.round(x)
x= Math.floor(x)
x= Math.ceil(x)
x= Math.abs(x)
x= Math.pow(x,2)
x= Math.sqrt(x)

//String methods

let uname = "Kingshuk"

console.log(uname.charAt(1));
console.log(uname.indexOf('g'));
console.log(uname.lastIndexOf('k'))
uname = uname.trim();
uname = uname.toUpperCase();
uname = uname.toLowerCase();

uname = uname.replaceAll('k','p');
console.log(uname);

let fullname = "Kingshuk Mukherjee"
let first = fullname.slice(0,8)
let last = fullname.slice(9)
console.log(first);
console.log(last);


//var -> limited to block scope{}
//let -> limited to whole function(){}
//global variables should be 'let' or else it will change window properties

console.log('hello',uname)
console.log(`hello ${uname}`)//template literals

let myNum = 123456.789

// myNum = myNum.toLocaleString("en-US");//eng
// myNum = myNum.toLocaleString("hi-IN");//hindi
// myNum = myNum.toLocaleString("de-DE");//german
// console.log(myNum)

myNum = myNum.toLocaleString("en-US", {style: "currency", currency:"USD"});//eng
console.log(myNum)

myNum = myNum.toLocaleString(undefined, {style :"percent"});
myNum = myNum.toLocaleString(undefined, {style :"unit", unit : "celsius"});

let colors = ["red","blue","green","black"]

for(let c of colors){
    console.log(c)
}


colors.push("pink")
colors.pop()
colors.unshift("grey")
colors.shift()
console.log(colors.length)

colors = colors.sort();
colors = colors.sort().reverse;


//spread
nums = [1,2,3,4,5,6]
console.log(nums);
console.log(...nums);

nums2 = [7,8,9]
nums.push(...nums2)
console.log(nums);

//rest params

console.log(sum(2,6,8,4,6,8));

function sum(...numbers){
    let total =0
    for(let num of numbers){
        total+=num
    }
    return total;
}

//callback

function disp(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, disp);

//foreach

let students = ['kingshuk','piyush','tatvit']

students.forEach(cap)
students.forEach(dis)

function cap(element, index, array){  //these params automatically provided
    array[index]= element[0].toUpperCase() + element.substring(1)
}

function dis(element, index, array){
    console.log(element);
}

//map

let numbs = [1,2,3,4,5]
let sqrs = numbs.map(square);
sqrs.forEach(dis)

function square(element){
    return Math.pow(element,2)
}

//filter

let even = numbs.filter(checkEven)
even.forEach(dis)

function checkEven(element){
    return (element%2)==0;
}


//reduce

 let sumb = numbs.reduce(addnum)
 console.log(sumb)

 function addnum(total, element){
    return total+element;
 }

 //sort

 dnum = numbs.sort(desc)
 dnum.forEach(dis)
 
 function desc(x,y){
     return y-x
 }

 //function exp

 const greeting = function(){
     console.log("hello");
 }

 greeting()

//arrow func

const greeting2 = (uid) => console.log(`hello ${uid}`)

greeting2('kingshuk')

//map

const store = new Map([
    ['tshirt', 40],
    ['cards', 50],
    ['phone', 70],
    ['bag', 120],
    ['eggs', 10]
])

console.log(store.get('tshirt'));

store.set("hat", 20)
store.delete("bag")

store.forEach((value,key)=> console.log(`${key} $${value}`))

console.log(store.has('cards'));
console.log(store.size);

//object

const car = {
    model : "Mustang",
    color : "red",
    year : 2020,
    drive :function(){
        console.log(`driving ${this.model}`);
    }
}

console.log(car.model + car.year);
car.drive()

//classes

class Player{
    score=0
    pause(){
        console.log("paused");
    }
}

const p1 = new Player();
const p2 = new Player();

p1.score += 5

console.log(p1.score);
p2.pause()

//constructor

class Student{
    constructor(name,age,gpa){
        this.name = name
        this.age = age
        this.gpa = gpa
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const s1 = new Student("kingshuk","21","8.0")

console.log(s1.name + s1.age + s1.gpa);
s1.study();

dispinfo(s1)

function dispinfo(s){
    console.log(s.name);
    console.log(s.age);
    console.log(s.gpa);
}

//static

class Banana{
    static numofbanana =0
    constructor(color){
        this.color = color;
        Banana.numofbanana+=1;
    }
}

const b1 = new Banana("yellow")
const b2 = new Banana("green")
const b3 = new Banana("light yellow")

console.log(Banana.numofbanana);

//inheritance

class Animals{
    alive = true

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animals{
    
    constructor(name,age,runspeed){
        super(name,age)
        this.runspeed = runspeed
    }

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animals{
    constructor(name,age,swimspeed){
        super(name,age)
        this.swimspeed = swimspeed
    }

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

const r1 = new Rabbit("rabi")
const f1 = new Fish("fihi")

console.log(r1.alive);
r1.run()
f1.swim()
r1.eat()
f1.sleep()


//get set

class Cars{
    constructor(power){
        this._power = power
    }
    get power(){
        return this._power
    }
    set power(value){
        if(value>50 && value<9999)
        this._power = value
    }
}

let car1 = new Cars(300)
car1.power = 1000
console.log(car1.power);

//anonymous obj

class Card{
    constructor(value,suit){
        this.value = value;
        this.suit = suit
    }
}

new Card('A','Hearts')

let cards = [new Card('5','spades'),
            new Card('K','spades'),
            new Card('2','diamond')]

cards.forEach(card => console.log(`${card.value}  ${card.suit}`))


//error handling

try{
    let x = "h"
    // let x = window.prompt("enter num")
    x= Number(x)

    if(isNaN(x)) throw "Not a num"
    if(x == '') throw "empty"

    console.log(`${x} is a num`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("always exe ");
}

//settimeout

setTimeout(firstMessage, 3000)
setTimeout(secondMessage, 6000)
setTimeout(thirdMessage, 9000)

function firstMessage(){
    console.log('1st')
}
function secondMessage(){
    console.log('2st')
}
function thirdMessage(){
    console.log('3st')
}


//setInterval

let count = 0;
let max = 10
// let max = window.prompt('enetr max')
max  = Number(max)

const myTimer = setInterval(countUp, 1000)

function countUp(){
    count+=1
    console.log(count)
    if( count >= max){
        clearInterval(myTimer)
    }
}

//date

let date = new Date();
date = date.toLocaleString()
console.log(date);

//getFullYear,getDate,getDay,getMonth,getHours,getMinutes,getSeconds,getMilliseconds;

//promises

const prom = new Promise((resolve,reject) =>{
    let fileLoaded = true;

    if(fileLoaded){
        resolve("file loaded")
    }
    else{
        reject("file not loaded")
    }
})

prom.then(value => console.log(value))
    .catch(error => console.log(error))

//async

async function loadFile(){

    let fileLoaded = false;

    if(fileLoaded){
        return "File loaded"
    }
    else{
        throw "File not Loaded"
    }
}

loadFile().then(value => console.log(value))
        .catch(error =>console.log(error))

//await

async function startProc(){
    try{
        let message = await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}

startProc();

//DOM
//getelementbyID,name,class,tagname,queryselector,queryselectorall
//.firstElementChild,.lastElementChild,.parentElement,.nextElementSibling,.previousElementSibling,.childer[],Array.from(.children)
//.createElement, .innerHTML, .textContent,.append





/*
ES6
*/

//object destructuring

const info = {
    firstname : 'kingshuk',
    lastname : 'mukherjee',
    city : 'ranchi',
    state : 'jharkhand'
}

const {firstname : fn, lastname : ln} = info

console.log(`${fn}  ${ln}`);

//array destructuring

let [fname,lname] = ['Kingshuk','Mukherjee','21']

console.log(`${lname}`);
fname = 'vyking'
console.log(fname);

//object literals

function addres(city,state){
    const newad = {city, state}
    console.log(newad);
}

addres('ranchi', 'jhar')


