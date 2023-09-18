// Stack Memory -- Primitive Memory --Call by value Means get copy of variable
console.log('///////////////Stack///////////')
let language = 'Javascript'
let Framework = language

framework = 'Angular'
console.log(language) //Javascript
console.log(framework) //Angular


// Heap Memory -- Non-Primitive -- call by refers Means Original Object,array can direcly change them.
console.log('//////////Heap////////')
const user = {
    'email' : 'admin@gmail.com',
    'age' :30,
}

let userSecond = user
userSecond.email = 'gmail@gmail.com'
console.log(user.email) //gmail@gmail.com
console.log(userSecond.email) //gmail@gmail.com