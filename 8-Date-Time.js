//Dates
let date = new Date()
console.log(date) //2023-09-29T05:14:43.577Z
console.log(date.toString()) //Fri Sep 29 2023 10:44:43 GMT+0530 (India Standard Time)
console.log(date.toDateString()) //Fri Sep 29 2023
console.log(date.toLocaleDateString()) //9/29/2023
console.log(date.toLocaleString()) //9/29/2023, 10:45:39 AM
console.log(date.toISOString()) //2023-09-29T05:16:04.406Z
console.log(typeof date) //object

let specificDate = new Date(2023, 0, 23)  //(0 is Jan)
console.log(specificDate.toDateString()) //Mon Jan 23 2023
console.log(specificDate.toLocaleDateString()) //1/23/2023
console.log(specificDate.toLocaleString()) //1/23/2023, 12:00:00 AM 

let specficDateFormat = new Date("2023-09-29") //(1 is Jan)
console.log(specficDateFormat.toDateString())

let specficDateFormatIndia = new Date("09-29-2023") //(1 is Jan)
console.log(specficDateFormatIndia.toDateString())

//TimeStamps
let timeStampValue = Date.now() 
console.log(timeStampValue) //time in milliseconds
//OR
let timeStampValueWithNew = new Date().getTime() //1695965768295
console.log(timeStampValueWithNew) //1695965768297

console.log(specificDate.getTime()) //date to milliseconds

//milliseconds to seconds
console.log(Math.floor(Date.now()/1000))

