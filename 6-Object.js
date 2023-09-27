//Object can be create by 2 ways

// 1) Constructor -- Singleton
// Object.create

// 2) Object literals

const symbolVal = Symbol('JOHN_KEY')
const userObject = {
    name: 'John',
    [symbolVal]:'Johhy English',
    'full name':'John Deo',
    age:25,
    isLoggedIn:true,
    lastLogin: ['Sat','Sun'],
}

console.log(userObject.name)
console.log(userObject["age"])
console.log(userObject["full name"])
console.log(userObject[symbolVal])

console.log(userObject.age = 30)

// freeze object --value cannot be changed
Object.freeze(userObject)
userObject.age= 45
console.log(userObject)


// userObject.name = function () {
//     console.log('I am Object Function')
// }

// console.log(userObject.name())

//Reference the name of a object

// userObject.newObj = function () {
//     console.log(`I am Object Function ${this.name}`)
// }

// console.log(userObject.newObj())

//Constructor -- Singleton

const singleTon = new Object()
console.log(singleTon)

const  lateralObject = {}
console.log(lateralObject)

singleTon.name = "Steve"
singleTon.age = 30
singleTon.isLoggedIn = true
console.log(singleTon)

const userInfo = {
    email : "mailto:john@gmail.com",
    fullName: {
        firstName : "John",
        lastName : "Cena",
        user: {
            userName : "john",
            userId : "john123"
        }
    }
}

console.log(userInfo.fullName)
console.log(userInfo.fullName.user)
console.log(userInfo.fullName?.user.userId)

//object Merging
const evenNumber = {2:"A",4:"B",6:"C",8:"D"}
const oddNumber =  {1:"E",3:"F",5:"G",7:"H"}
console.log({evenNumber,oddNumber})  //{
//   evenNumber: { '2': 'A', '4': 'B', '6': 'C', '8': 'D' },
//   oddNumber: { '1': 'E', '3': 'F', '5': 'G', '7': 'H' }
// }

console.log(Object.assign(evenNumber,oddNumber))
console.log(Object.assign({},evenNumber,oddNumber))