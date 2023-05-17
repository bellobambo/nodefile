const upperCase = require("upper-case").upperCase
function greet(name){
    console.log(upperCase(`Hello ${name} , welcome to 6ix city`))
    // setTimeout(() => {

    //     console.log(upperCase(`Cant ${name} , exit`))
    // } , 1000)

}

greet("bello")
module.exports = greet