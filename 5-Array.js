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
console.log(originalArray)

// splice

console.log(originalArray.splice(1,4)) //[ 200, 300, 400, 500 ]
console.log(originalArray) // [100]

