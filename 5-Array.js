//Array in Javascript

// Javascript arrays are resizable
// Javascrips arrays are not associative array
// Javascript array-copy-operations create shallow copies

const firstArray = [10,20,30,40,'JavaScript']
const languages = ['JS','Python','Ruby & Rails']
console.log(languages[2])

const afterArrayDeclare = new Array('Node Js','PHP','JAVA');
console.log(afterArrayDeclare[0])

//Array Methods
afterArrayDeclare.push("Laravel")
console.log(afterArrayDeclare) //[ 'Node Js', 'PHP', 'JAVA', 'Laravel' ]

afterArrayDeclare.pop()
console.log(afterArrayDeclare) //[ 'Node Js', 'PHP', 'JAVA']

afterArrayDeclare.unshift('Cake PHP')
console.log(afterArrayDeclare) //[ 'Cake PHP', 'Node Js', 'PHP', 'JAVA' ]

afterArrayDeclare.shift()
console.log(afterArrayDeclare) //['Node Js', 'PHP', 'JAVA' ]

//true or false result
console.log(afterArrayDeclare.includes('C++')) //false

console.log(afterArrayDeclare.indexOf('C++')) // -1

// array to String 
const convertedString = afterArrayDeclare.join()
console.log(afterArrayDeclare) //[ 'Node Js', 'PHP', 'JAVA' ]
console.log(convertedString) //Node Js,PHP,JAVA

console.log(typeof afterArrayDeclare) //object
console.log(typeof convertedString) //string

//slice
const originalArray = [100,200,300,400,500]
console.log(originalArray.slice(1,4)) //[ 200, 300, 400 ]
console.log(originalArray)  //[100,200,300,400,500]

// splice

console.log(originalArray.splice(1,4)) //[ 200, 300, 400, 500 ]
console.log(originalArray) // [100]

const countries = ['India','US','Russia','UK','Germany']
const capital = ['New Delhi','Washington','Moscow','London','Berlin']
const currency  = ['Rupees','Dollar','Ruble','Pound','Euro']

const pushArray = countries.push(capital) 

console.log(pushArray) // ['India','US','Russia','UK','Germany',[ 'New Delhi', 'Washington', 'Moscow', 'London', 'Berlin' ]]

const concatArray = countries.concat(capital)  
console.log(concatArray) //['India','US','Russia','UK','Germany', 'New Delhi', 'Washington', 'Moscow', 'London', 'Berlin' ]

// Alternate of concat is spread operator
const spreadArray = [...countries,...capital,...currency]
console.log(spreadArray)  //['India','US','Russia','UK','Germany', 'New Delhi', 'Washington', 'Moscow', 'London', 'Berlin','Rupees','Dollar','Ruble','Pound','Euro' ]

// flat Array
const monthsArray = ['Jan','Feb',['Mar'],['Apr','May','June'],'July','Aug',['Sep','Oct'],['Nov'],'Dec']
// console.log(monthsArray)
const  inFlatArray = monthsArray.flat(Infinity)
console.log(inFlatArray)

const  isArrayMethod = Array.isArray([1,2,3]) 
console.log(isArrayMethod) //true

const  isArrayMethodCheck = Array.isArray("Javascrit") 
console.log(isArrayMethodCheck) //false

const fromArray = Array.from('Javascript')
console.log(fromArray) // ['J', 'a', 'v', 'a','s', 'c', 'r', 'i','p', 't']

console.log(Array.from({'language': 'Javascript'})) // []

console.log(Object.values({'language': 'Javascript'})) // Javascript


const language1 = 'Python'
const language2 = "Ruby & Rails"
const language3 = "JavaScript"
const language4 = "C++"

console.log(Array.of(language1,language2,language3,language4)) // [ 'Python', 'Ruby & Rails', 'JavaScript', 'C++' ]
