/*
* JavaScript Programming Exercise 1
* Jose Silva
* ITPA 2021
*/ 

/*
First we'll learn how to declare variables, in JS we don't need to declare the type of vairable 
*/

let myFirstIntergerVariable = 4;
let myFirstFloatVariable = 9.9;
let myFirstBooleanVariable = true;
let myFirstName = "Jose";
let myNullVariable = null; // This says to the machine reserve a space and don't put anything in it
let myUndefinedVariable; 

// how to comment an entire line --> ctrl + /

// This command prints on the terminal what we passed.

console.log("------------------------------------------------");
console.log("             Lets work with variable            ");
console.log("------------------------------------------------");

// To run the app, you need to tap inside the console "node AppName.js"

console.log(myFirstIntergerVariable);
console.log(myFirstFloatVariable);
console.log(myFirstBooleanVariable);
console.log(myFirstName);
console.log(myNullVariable);
console.log(myUndefinedVariable);

// Reassigning Variables
console.log("------------------------------------------------");

let mySecondInteger = 3;
console.log(mySecondInteger);
mySecondInteger = 10;
console.log(mySecondInteger);


console.log("Addition (10 + 4)");
let myAddittion = myFirstIntergerVariable + mySecondInteger;
console.log(myAddittion);
console.log("-------------------------");

console.log("Subtraction (10 - 4)");
let mySubtraction = mySecondInteger - myFirstIntergerVariable;
console.log(mySubtraction);
console.log("--------------------------");

console.log("Multiplication");
let myMultiplication = myFirstIntergerVariable * mySecondInteger;
console.log(myMultiplication);
console.log("--------------------------");

console.log("Division");
let myDivision = myMultiplication / myFirstIntergerVariable;
console.log(myDivision);
console.log("---------------------------");

console.log("Integer + Float");
let floatAddittion = myFirstIntergerVariable + myFirstFloatVariable;
console.log(floatAddittion);
console.log("---------------------------");

console.log("Integer - Float");
let floatSubstraction = myFirstIntergerVariable - myFirstFloatVariable;
console.log(floatSubstraction);
console.log("---------------------------");

console.log("Integer / Integer = Float");
let divideInts = myFirstIntergerVariable / mySecondInteger;
console.log(divideInts);
console.log("--------------------------");

console.log("Integer / Integer = Float");
// Dividing numbers that divide themselves it will return an integer.
let x = 4/2;
console.log(x);
console.log("--------------------------");

console.log("Modulus 13 & 4");
let modulus = 13 % 4;
console.log(modulus);
console.log("--------------------------");

console.log("++ Starting at 3");
let a = 3;
a++;
console.log(a);
console.log("--------------------------");

console.log("-- Starting at 7");
let b = 7;
b--;
b--;
console.log(b);
console.log("--------------------------");

console.log("Compound += with 3 & 5");
let c = 3;
c += 5;
console.log(c);
console.log("--------------------------");

console.log("Compound -= with 3 & 5");
let d = 3
d -= 5;
console.log(d);
console.log("--------------------------");