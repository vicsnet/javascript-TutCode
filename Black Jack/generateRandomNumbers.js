//let randomNumber = Math.random()

//to create a dice function
//let randomNumber = Math.random() * 6


//flooring the number
//let flooredNumber = Math.floor(3.45632)
//using math.random with math.floor

// let randomNumber = Math.floor ( Math.random() * 6 )
// console.log(randomNumber)


//trying to modify the expression to get a range between 1 to 6

// let randomNumber = Math.floor ( Math.random() * 6 ) + 1
// console.log(randomNumber)

//create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
    
}

console.log( rollDice() )