// let firstName = "Vincent"

// let lastName = "Adesanmi"

// let fullName = firstName + " " + lastName

// console.log(fullName)

// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }
// function remove1Points() {
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log(myPoints)
let message = document.getElementById("error")
function errorMess() {
    let purchaseClick = "Something went wrong, please try again"
    message.innerText = purchaseClick
    console.log('button clicked')
}

let num1 = 8
let num2 = 2
let calculator = document.getElementById("sum-el") 
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2



function add() {
    let addMe =  num1 + num2
    calculator.innerText = "Sum: " + addMe
}
function substract() {
    let substractMe = num1 - num2
    calculator.innerText = "substract: " + substractMe
}
function divide() {
    let divideMe = num1 / num2
    calculator.innerText ="divide: " + divideMe
}
function multiply() {
    let multiply = num1 * num2
    calculator.innerText = "Multiply: " + multiply
}