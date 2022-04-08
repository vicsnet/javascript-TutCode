// Boolean
// console.log(4 === 3)
// console.log(5 > 2)
// console.log(12 > 12)
// console.log(3 < 0)
// console.log(3 >= 3)
// console.log(11 <= 11)
// console.log(3 <= 2)








    
//let firstCard = 7
// let firstCard = getRandomCard()

// //let secondCard = 11

// let secondCard = getRandomCard()

// let cards = [firstCard, secondCard]

// let sum = firstCard + secondCard


//let secondCard = 11


let cards = []

let sum = 0

 let hasBlackJack = false

let isAlive = false
let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector("#sum-el")

let message = ""
let cardEl = document.getElementById("card-el")

//creating object
let player = {
    name: "Vince",
    chips: 145,

    sayHello: function () {
        console.log("Heisann!")
    }

}
player.sayHello()
// let playerName = "Vince"
// let playerChips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//creating a function, getRandomCard(), that returns the number between 1 and 13

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else  {
        return randomCard 
    }
        
    
}

//message = "we're logging out"

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()

    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]

    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    

    // cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    //cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
        
    }

    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        //console.log("Do you want to draw a new card")
        message= "Do you want to draw a new card"
    } else if (sum === 21) {
        //console.log("Wohoo! you got blackJack")
        message = "Wohoo! you got blackJack"
        hasBlackJack = true
    }
    else  {
        //console.log("You are out of the game!  ")
        message = "You are out of the game!  "
        isAlive = false
    }
    
    
    //console.log (message)
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()

    }
    //let card = 10
//     let card = getRandomCard()

//    // firstCard = card

//     sum += card

//     //push the card to the cards array
//      cards.push(card)

//     renderGame()
//     console.log("Drawing a new Card")
}



// Cash Out
// console.log(hasBlackJack)
// console.log(isAlive)
//check if the person is old enough to enter night club

// let age = 20

// if (age < 21) {
//     console.log("You can not enter the club")
// } else {
//     console.log("Welcome!")
// }
