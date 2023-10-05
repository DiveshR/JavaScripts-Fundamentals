// Number and Maths
const age = 23
console.log(age) //23

const salary = new Number(1000)
console.log(salary) //[Number:1000]

const fixedValue = 121.2312
console.log(fixedValue.toFixed(2)) //121.23

console.log(fixedValue.toPrecision(5)) //121.23

const toLocal = 12000000
console.log(toLocal.toLocaleString('en-IN')) //1,20,00,000
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

//Maths

// console.log(Math.abs(-111212121))
// console.log(Math.round(3.14))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.999))

// console.log(Math.random()) //random values between 0 and 1
// console.log(Math.random()*10) // shift 1 value to left to to get value between 0 and 10
// console.log((Math.random()*10) +1) //get random values between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1) + min)) //get random value between 10 and 20
// console.log(max-min+1)
