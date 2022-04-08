// let hasCompletedCourse = true
// let givesCertificate = true

// if (hasCompletedCourse === true && givesCertificate === true) {
//     // if (givesCertificate === true) {
//     //     generateCertificate()
//     // }
//     generateCertificate()
// }
// function generateCertificate() {
//     console.log("Generating certificate ....")
// }

let hasSolvedChallenge = false
let hasHintsLeft = false

if (hasSolvedChallenge === false && hasHintsLeft === false) {
    showSolution()
}

function showSolution() {
    console.log("Showing the solution...")
}

// using or statement 
let likeDocumentaries = true

let likeStartups = true

if (likeDocumentaries === false || likeStartups === false) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like! ")
}