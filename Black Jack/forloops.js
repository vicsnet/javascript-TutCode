// Count to ten!

// for (let count = 10; count < 21; count += 1){
//     console.log(count)
// }

//
for (let i = 0; i < 6; i += 1) {
    console.log(i)
}

//count from 10 to 100 in steps of 10
for (let i = 10; i < 101; i += 10) {
    console.log(i)
}

//using forloop for array
let messages = [
    "Hey, how's it going",
    "I'm great, thank you! How about you",
    "All good. Been workinng on my portfolio lately.",
    "Hello vince"
]

// for (let i = 0; i < 3; i += 1){
//     console.log(messages[i])
// }

for (let i = 0; i < messages.length; i += 1){
    console.log(messages[i])
}


let ards = [7, 3, 9]

for (let i = 0; i < ards.length; i += 1){
    console.log(ards[i])
}


let sentence = ["Hello", "my", "name", "is", "vince"]
let greetingEl = document.getElementById("greeting-el")

for (i = 0; i < sentence.length; i++){
    
    greetingEl.textContent += sentence[i] + "  "
}