let passList = [
    "0123456789",
    "abcdefghijklmnopqrstuvwxyz",
    "!@#$%^&*()",
    " ABCDEFGHIJKLMNOPQRSTUVWXYZ"
]
// for (let i = 0; i < passList.length; i++) {
   
//     let randomCard = passList[Math.floor(Math.random() * passList.length)]
//     console.log(randomCard)
// }

let randomCard = passList[Math.floor(Math.random() * passList.length)]
    console.log(randomCard)

let colors = ["red","blue","green","yellow"]
let randomColor = colors[Math.floor(Math.random() * colors.length)]
console.log(randomColor)

// function GenRandPass() {
//     for (let i = 0; i < passList.length; i++) {
//         console.log(passList[i])
        
//     }
// }


// function GeneratePass() {
//     for (let i = 0; i < passList.length; i++) {
//         let randomPass = Math.floor(Math.random() * i)
//         console.log(randomPass)
        
//     }
    
    
// }


function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 12; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
console.log(makeid());
  
let characters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 
'abcdefghijklmnopqrstuvwxyz', '1234567890', '!@#$%^&*()'];



function getRandomCapital() {
    for (let i = 0; i < 12; i++) {
        
        
    }
    let index = Math.floor(Math.random() * characters[i].length);
    return (characters[i][index]);
}
console.log(getRandomCapital())