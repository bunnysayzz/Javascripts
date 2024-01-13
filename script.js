function clickMe() {
    alert("Hello Mr. Single");
    
  }

  console.log('this my website')


  let firstName = "Hello";
  let numberName = 123;
  let bool = true;
  console.log(firstName);
  console.log(typeof firstName)
  console.log(typeof numberName);
  console.log(typeof bool);

  // let is for inside the box

var age = 23;
age = 32;
console.log(age);

// var is can be accesed outside box

const pin = 52;
// const cannot be reassigned again like var or let
// pin = 34;
// in const we cannot assign empty value like var and let 
// let pin; permisibble
// var pin; permisibble
// const pin; not permisibble
console.log(pin);

let x = 1;
x = x + 10;
x = x - 5;
x = x * 3;
x = x / 3;
x = x % 4;
x++; //x = x+1
x--;
x = x ** 3;  // x power 3

let x = 10;
x += 5; // x is now 15
x -= 5; // x is now 10
x *= 5; // x is now 50
x /= 5; // x is now 10
x %= 5; // x is now 0
x **= 5; // x is now 0
console.log(x);

// Comparison operators
let i = 10;
let j = 5;
console.log(i == j); // false
console.log(i != j); // true
console.log(i === j); // false
console.log(i !== j); // true
console.log(i > j); // true
console.log(i < j); // false
console.log(i >= j); // true
console.log(i <= j); // false


// Logical operators
let k = true;
let l = false;
console.log(k && l); // false
console.log(k || l); // true
console.log(!k); // false

// Conditional (ternary) operator
let q = 10;
let r = 5;
let s = q > r ? "right" : "wrong"; // s is now "Greater"

let a = 10;
let b = 20;

let c = 12;
let d = 32;
console.log(a + b > 10);


let sirName = 'Azhar';
let myAge = 21;

console.log(`My name is
${sirName}
and I am ${myAge} years old`);

console.log('My name is ' 
+ sirName + 
' and I am ' + myAge + ' years old');

// These above two having two different aspects you can see in first console line is braking when we start writing into newline within single quote without /n but in second console we need to use /n for newline assingle denotes string literals and does not allow to literal which does not allow insert newlines or other special charcters without escaping them

let herAge = 19;
if (myAge >= 21 && herAge >= 18) {
  console.log('Allowed to marry');
}

else {
  console.log('Not allowed to marry');
}


let num1 = '22';
let num2 = 22;

console.log(Number(num1)+num2);


let he = 'azhar';
console.log(typeof !he);
console.log(typeof he);


// day 15

let p = 21;
let q = '21';

console.log(p == q);
console.log(p === q);

// you should use the === operator when you need to ensure that two values are equal and of the same type. You should only use the == operator when you do not care about the type of the values.


// day 16

var x = 0;

if (x > 50) {
  console.log("x is greater than 50");
} else if (x > 5) {
  console.log("x is greater than 5 but not greater than 50");
} else {
  console.log("x is 5 or less");
}


const day = 'tuesday';

switch (day) {
    case 'monday':
    case 'tuesday':
        console.log(1);
        break;
    default:
        console.log(2);
}

const today = 'saturday';

switch(today) {
  case 'monday':
    case 'tuesday':
      console.log(1);
      break;

      default:
        console.log(2);
}
//Sweitch case is type case dependent for example if const is in Monday but in switch case in monday then the code will braek and return default

//day 17

let data = 3;
let check = data === 5? 'yes' : 'no'
console.log(check)

//day 18




//day 19
const obj = {
  name: 'azhar',
  get: function () {
    console.log(this);
  },
};

let m = 10;
let n = 20;

console.log("Before swap:");
console.log("m =", m);
console.log("n =", n);

// Swapping logic
let temp = m;
m = n;
n = temp;

console.log("After swap:");
console.log("m =", m);
console.log("n =", n);

function processData(input) {
  //Enter your code here
  console.log(input);
} 

function processData(input) {
  //Enter your code here
  console.log(input);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});





// const prompt = require("prompt-sync")({ sigint: true });
// let a1 = prompt("Enter first number: ");
// let b1 = prompt("Enter second number: ");
// console.log("The sum of the two numbers is " + (parseInt(a1) + parseInt(b1)));
// console.log("The difference of two numbers is " + (parseInt(a1) - parseInt(b1)));


// const prompt = require("prompt-sync")({ sigint: true });
// let z1 = prompt("Enter the limit: ");
// z1 = parseInt(z1);

// for (let i=0; i<z1; i++) {
//   console.log(i)
// }


// const prompt = require( "prompt-sync")({ sigint: true });
// let z1 = prompt("Enter the limit: ");
// z1 = parseInt(z1);
// if(z1<=22){

// for (let i=z1; i>=0; i--){
//   console.log(i)
// }
// }
// else {
//   for(let i=0; i<=z1; i++){
//     console.log(i)
//   }
// }


const prompt = require("prompt-sync")({sigint: true});
// let z1 = prompt("Enter the first number: ");
// let z2 = prompt("Enter the second number: ");

// if(z1>z2){
//   console.log("First number is larger than Second Number");
// }
// else{
//   console.log("The Second Number is larger than First Number");
// }

// let z = prompt(Enter the number: );

//types of function
//function statement 
//first order function
//fat arrow function
var greet = (name) => {
  console.log("Hello, " + name + "!");
}
greet("John"); // Output: Hello, John!


//call by function asyncronous by api

console.log("1");
console.log("2");
setTimeout(() => {
  console.log("3");
}, 0);
console.log("4");
// to resolve this we use call by queue


//Array //declearitive design uses
var arr = [11, 4, 5, 4, 3, 0, 710];
var arr2 = arr.slice(1, 5);
var arr3 = arr.slice(1);
console.log(arr2);
console.log(arr3);
arr.splice(1, 0, "a", "b", "c");
console.log(arr);

//using map

var arr = [2, 3, 5, 6, 7];

var mularr = arr.map(element => element * 2);

console.log(mularr);


function sum(a,b) {
    console.log("call by value:", a + b);

 a = a + b;
  b = a + b;
  console.log("call by reference:" , a, b);
    }

    sum(2,3);

    let a = 10;
    let b = "Hi";
    let c = a;
    c = c +1;
    console.log("a:", a);
    console.log("b:", b);
    console.log("c:", c);

function add(array, element) {
  array.push(element);

}
//js only hoist declaration not initialization 

let a = 10;  //initialisation
console.log(a);  //declaration

//Variable scope in js
//local scope: can be accesed inside the function only
//global scope: can be accessed outside the scope also 
//blocked scope: if else loop scope
//lexical scope: top of js 

//Data types

//primitive: call by value(copy the data)
//7 types: String , Number , Boolean , Null , Undefined , Symbol , BigInt

const score = 100;
console.log(typeof score);


const scoreValue = 100.5;
console.log(typeof scoreValue);

const isInt = false;
console.log(typeof isInt);

const empty = null;
console.log(typeof empty);

let mail;
console.log(typeof mail);


const id = Symbol('456');
const secondId = Symbol('456');
console.log(typeof id);


console.log(id === secondId);
// false becoz eah time symbol creates new objects and they are not same although their value same to makein same objects go through next commmand 

const id = Symbol.for('456');
const secondId = Symbol.for('456');

console.log(id === secondId);
//now true The Symbol.for() method returns a symbol that is associated with the specified string. This means that the two symbols you created in your code are associated with the same string, "456". As a result, they are considered equal by the === operator. 
 

const bigNum = 4673826454837n;
console.log(typeof bigNum); 
//bigInt


//Nonprimitive: call by reference
//3 types: Array , objects , functions

const fruits = ["apple","banana","pears"];
console.log(typeof fruits); 


let myObj = {
  name: "azhar",
  age: 21 ,
  sec: "AH"
}
console.log(typeof myObj); 

console.log(myObj.name);
//to access object we use dot between object name and the elements of that object

//function using varble declearation

const myFunction = function() {
  console.log("Hey");
};




   //Prototypal inheritance

   let arr = ["a", "b"];

   //prototype inheritance are the hidden object attached by js engine to get access of functions 

   arr.length 

   // to check the objects attached    arr.__proto__.
   console.log(arr.__proto__);
//same for objects and functions and others



