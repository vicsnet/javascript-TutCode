let person = {
    name: "Vince",
    age: 25,
    country: "Nigeria",

}
function logData() {
    console.log(person.name + " is " + person.age + " years old" + " and lives in " + person.country )
    
}
logData()

let age = 19
if (age < 6) {
    console.log( "free")
}else if (age < 18) {
    console.log("child Discount")
} else if (age  < 27) {
    console.log("student discount")
} else if (age < 67) {
    console.log( "full price")
} else {
    console.log("senior citizen discount")
}


//for loop
let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

for (let i = 0; i < largeCountries.length; i++) {
    
    largeCountries.pop()
    largeCountries.push("pakistan")
    largeCountries.shift()
    largeCountries.unshift("China")
    console.log(" -" + largeCountries[i])
    
}



let dayOfMonth = 13
let weekday = "friday"

if (dayOfMonth === 13 && weekday === "friday") {
    console.log("yo it friday")
} else {
    console.log("get to work")
}

// creatin a function that returns random item
let hands = ["rock", "paper", "scissors"]

function randomItems() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
    
}

console.log(randomItems())


//creating a function that puts the apples onto the appleShelf and orange on the orange shelf
let fruit = ["apple", "orange", "apple", "apple", "orange", "apple", "apple"]

let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i < fruit.length; i++){
        if (fruit[i] === "apple") {
            appleShelf.textContent += "apple"
        } else if (fruit[i] === "orange") {
            orangeShelf.textContent += "orange"
        }

    }
}
sortFruit()