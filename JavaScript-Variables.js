// Variables are Containers for Storing Data

// - Automatically
// - Using var
// - Using let
// - Using const]


// const pie =3.14;
// constant values and cannot be changed.

// When to Use var, let, or const?

// 1. Always use const if the value should not be changed
// 2. Always use const if the type should not be changed (Arrays and Objects)
// 3. Only use let if you can't use const


//JavaScript Identifiers
// These unique names are called identifiers.

// JavaScript identifiers are case-sensitive.




// Declaring a JavaScript Variable
// var name;
// let age;

// They have undefined value in it.
// var name = 'Divesh'; // assignement of  values
// console.log(name);
// let age= 30;
// console.log(age);

//It's a good programming practice to declare all variables at the beginning of a script.


// Re-Declaring JavaScript Variables

// If you re-declare a JavaScript variable declared with var, it will not lose its value.
// var name = 'Divesh';
// var name;
// console.log(name); // Output: Divesh

// NOTE: You cannot re-declare a variable declared with let or const.
// let age =20;
// // let age; //SyntaxError: Identifier 'age' has already been declared
// age=30;
// console.log(age); // Output: 30


// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
// console.log("5"+1+10); // Output: 5110
// console.log(2+3+"5"); // Output: 55

// let $ = "Hello World";
// console.log($); // Output: Hello World
// let $$$ = 10;
// console.log($$$); // Output: 10


// Key Points of let variables

// -  The let keyword was introduced in ES6 (2015)
// - Variables declared with let have Block Scope
// - Variables declared with let must be Declared before use
// - Variables declared with let cannot be Redeclared in the same scope



// Block Scope

// Before ES6 (2015), JavaScript did not have Block Scope.

// JavaScript had Global Scope and Function Scope.

// ES6 introduced the two new JavaScript keywords: let and const.


// Variables declared inside a { } block cannot be accessed from outside the block:

// {
//   let x = 2;
// }
//  console.log(x);// x can NOT be used here -- get error ReferenceError: x is not defined


 // Global Scope

//  Variables declared with the var always have Global Scope.

// {
//     var y = 2;
// }
//   console.log(y);// x CAN be used here -O/P 2


//   You can not accidentally redeclare a variable declared with let.


// Redeclaring Variables

// var language = 'Js';
// {
//     console.log(language);
// }
// console.log(language); //Js

// {
//     var language = 'Rust';
//     console.log(language); //Rust
// }

// console.log(language); //Rust


// Redeclaring a variable using the let keyword can solve this problem.

// Redeclaring a variable inside a block will not redeclare the variable outside the block:

// let country = 'India';
// console.log(country); //India
// {
//     let country = 'United States';
//     console.log(country); // United States
// }
// console.log(country); //India


// Difference Between var, let and const

//        scope    Redeclare    Reassign    Hoisted    Binds this
// var    no       yes          yes         yes        yes
// let    yes      no           yes         no         no
// const  yes      no           no          no         no


// let city = "Gurugram";   // Allowed
// let city = "Noida";   // Not allowed

// Redeclaring a variable with let, in another block, IS allowed:

// {
//     let car = "BMW";
//     console.log(car); // BMW
// }
// {
//     let car = "Mercedes"; // can redeclare in another block
//     console.log(car); // Mercedes
// }


// Let Hoisting

// Variables defined with var are hoisted to the top and can be initialized at any time.

// You can use the variable before it is declared:
// console.log(color); // undefined
// color = 'red';
// var color;
// console.log(color); // red

// // Variables defined with let are also hoisted to the top of the block, but not initialized.
// hero = "Bat" ; // ReferenceError: Cannot access 'hero' before initialization
// let hero = "Captain America"; //



// JavaScript Const

// Variables defined with const cannot be Redeclared    
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

//Variables defined with const cannot be Reassigned

// Variables defined with const have Block Scope

//  JavaScript const variables must be assigned a value when they are declared:

// const PI = 3.14159265359; //correct

// Incorrect
// const PI;
// PI = 3.141592653589793;

// When to use JavaScript const?

// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp

// Constant Objects and Arrays

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// const string = ["string", "string", "string"];
// const string = ["x", "y", "z"];
// console.log(string); // Output: SyntaxError: Identifier 'string' has already been declared
// // Reassign a constant object

// But you CAN:

// Change the elements of constant array
// Change the properties of constant object

// const number = [10,20,40];
// number[0] = 50;
// console.log(number); // Output: [50, 20, 40]



// Hoisting
// You can use the variable before it is declared:

// Assignment Operators
// **= 
// x**=y  x= x**y


// JavaScript String Addition

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

// The += assignment operator can also be used to add (concatenate) strings:

let nameText = "I am John ";
nameText += "from India";
console.log(nameText);


// If you add a number and a string, the result will be a string!
console.log("Divesh"+30);

// JavaScript Type Operators
// typeof	Returns the type of a variable
// instanceof  Returns true if an object is an instance of an object type
















