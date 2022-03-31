// document.getElementById("count-el").innerText = 5

// let myAge = 25;

// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);



// let count = 5;

// count = count + 1

// console.log(count)
 
// function increment() {
//     console.log("the button was clicked");
// }

let welcomeEl = document.getElementById("welcome-el")

let Name = "Adesanmi Vincent"

let greeting ="Welcome Back"
 
welcomeEl.innerText = greeting + " " + Name 

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

 let count = 0

 function increment() {
    //  count = count + 1
     count += 1
     //countEl.innerText = count 
     countEl.textContent = count
    
}
  
function save() {
    let countStr = count + " - "
    
    //saveEl.innerText += countStr

    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
   
}
 

 