"use strict"; //act all code as newer version

// Primitive Datatypes (7)
// number => 1, 
// bigint,
// string => ""
// boolean => true/false
// null => standalone Value
// undefined
// Symbol => unique

const year=2023
const isBoolean = false
const emptyVar = null
let user

const id = Symbol('123')
const newId = Symbol('123')

console.log(id === newId)

// https://262.ecma-international.org/5.1/#sec-11.4.3


// NOTE: Primitive Datatypes are immutable(Value can not be changed). Everytime any method  is applied new variable is created 
let newString = "JAVASCRIPT"
console.log(newString) 

//Non Primitive Data Types
//objects,array,function
// Object  => An object is a collection of properties and has a single prototype object. The prototype may be null.
// NOTE: Objects,array are mutable

let newObj = {language : "Javascript Language"}
newObj.language = 'Python'
console.log(newObj.language)

let newArray = ['Language','Python','PHP']
console.log(newArray)   
newArray[0] = 'Javascript'
console.log(newArray)

console.log(typeof undefined) //undefined
console.log(typeof null) //object

//Objects are called as reference types
//Reference is assigned

// Referencing
let firstArrayRef = ['JavaScript Lang','Python Lang','Go Lang'] //referencing array to a firstArrayRef variable
let secondArrayRef = firstArrayRef
secondArrayRef[3] = 'Ruby & Rail'
console.log(firstArrayRef) // [ 'JavaScript Lang', 'Python Lang', 'Go Lang', 'Ruby & Rail' ]
console.log(firstArrayRef === secondArrayRef) //true

//Copying Array
let thirdArrayCpy = Array.from(firstArrayRef)
console.log(`Third Array=> ${thirdArrayCpy}`)  //Third Array=> JavaScript Lang,Python Lang,Go Lang,Ruby & Rail
console.log(thirdArrayCpy === firstArrayRef) //false ([ 'JavaScript Lang', 'Python Lang', 'Go Lang', 'Ruby & Rail' ],Third Array=> JavaScript Lang,Python Lang,Go Lang,Ruby & Rail)



///////////////////////////////////////////////////
//Datatype Conversion
// string 
let language = "javaScript"
console.log(typeof language)

let NumberConversion = Number(language)
console.log(NumberConversion) //NaN
console.log(typeof NumberConversion)

console.log('////////////')
// integer

let intValue  = "222asas"
console.log(typeof intValue)
let stringConversion = String(intValue)
console.log(stringConversion)
console.log(typeof stringConversion)

let aNumber = 33
let aStringNumber = String(aNumber)
console.log(aStringNumber)
console.log(typeof aStringNumber)
console.log('//////////////////')
let str = "1+1;"

console.log(str)
console.log(typeof str)

console.log(10+ "object") // 10object
console.log("10"*"9") //90
console.log(10* "9") //90
console.log("10"*9); //90
console.log("10"* "object") //NaN
console.log("object"*10) //NaN
console.log("object"*"10") //NaN
console.log("object"-"10") //NaN

console.log(1-"10" + "object") // -9object
console.log("string"-1 + "object") //NaNobject

//true gets to 1
//false,"" gets 0

//Forcefull Conversion
console.log("////////////////// ForceFull Conversion ///////////////////////////////////")
console.log(Number("100")) //100
console.log(Boolean("")) //false
console.log(Boolean([])) //true



////////////////////////////////////////
// Alogrithms in JS
// Object to Primitive value
/**
 * 1.prefer-string
 * 2.prefer-number
 * 3.no-preference
 */

//toString
//valueOf

let colorValue = 14
let binaryValue = colorValue.toString(2)
console.log(binaryValue) 

console.log({0: 'Zero'}.toString())

console.log(+true)

console.log("2">1)
console.log("02" > 1)

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

console.log(undefined > 0) //false
console.log(undefined == 0) //false
console.log(undefined >= 0) //false

// ===

console.log("100" === 100); //false






