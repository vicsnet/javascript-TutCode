let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
    
}

let fastestRace = getFastestRaceTime()

function getTotalRaceTime() {
    return player1Time + player2Time

}
let totalTime = getTotalRaceTime()
console.log(totalTime)
