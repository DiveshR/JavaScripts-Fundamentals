console.log('JavaScript')

let name = 'Node Js'
console.log(`${name} is a cross-platform`)

const language = new String('Python')

// 0: "P"1: "y"2: "t"3: "h"4: "o"5: "n"length: 6[[Prototype]]: String[[PrimitiveValue]]: "Python"
console.log(language[0])
console.log(language.__proto__)
console.log(language.toUpperCase())
console.log(language.length)
console.log(language.toLowerCase())
console.log(language.toLocaleLowerCase())

console.log(language.charAt(2)) //t
console.log(language.indexOf('o')) //4

console.log(language.substring(0,2))//py
console.log(`slice==> ${language.slice(-3,4)}`) //python
console.log(language.includes('Divesh')) //false
const channel = 'Js fundamentals'
console.log(channel.split(' ')) // [ 'Js', 'fundamentals' ]