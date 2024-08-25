
let humanScore = 0
let computerScore = 0
function getComputerChoice() {
    
    let computerChoice = ""
    let rndNumber = Math.floor(Math.random()*3)+1
    
    if(rndNumber === 1) {
        computerChoice = "Rock"
    } else if (rndNumber === 2) {
        computerChoice = "Paper"
    } else if (rndNumber === 3) {
        computerChoice = "Scissors"
    }
    return computerChoice
}
function getHumanChoice() {
    let answer = prompt("Choose Rock, Paper or Scissors!")
    return answer
}
console.log(getComputerChoice())
console.log(getHumanChoice())