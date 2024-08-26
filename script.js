
function getComputerChoice() {
    
    let computerChoice = ""
    let rndNumber = Math.floor(Math.random()*3)+1
    
    if(rndNumber === 1) {
        computerChoice = "rock"
    } else if (rndNumber === 2) {
        computerChoice = "paper"
    } else if (rndNumber === 3) {
        computerChoice = "scissors"
    }
    return computerChoice
}
function getHumanChoice() {
    let answer = prompt("Choose Rock, Paper or Scissors!").toLowerCase()
    answer.trim()
    return answer
}
function playRound(humanChoice, computerChoice) {

    let answerSet = []
    answerSet[0] = "rock"
    answerSet[1] = "paper"
    answerSet[2] = "scissors"
    if(!answerSet.includes(humanChoice)){
        console.log("Only input that is accepted are case-insensitive rock/paper/scissors")
        return
    }
    if(computerChoice === humanChoice) {
        console.log("Draw!!! You and the computer chose: " + computerChoice)
        return
    }


        switch (computerChoice) {
            case "rock": {
                if(humanChoice === "paper") {
                    console.log("You win! "+ humanChoice + " beats " + computerChoice)
                    humanScore++;
                }
                if(humanChoice === "scissors") {
                    computerScore++;
                    console.log("You lose! " + humanChoice + " loses to " + computerChoice)
                }
                break
            }
            case "paper": {
                if(humanChoice === "scissors"){
                    console.log("You win! "+ humanChoice + " beats " + computerChoice)
                    humanScore++;
                }
                if(humanChoice === "rock") {
                    console.log("You lose! " + humanChoice + " loses to " + computerChoice)
                    computerScore++;
                }
                break
        }
            case "scissors": {
                if(humanChoice === "rock") {
                    console.log("You win! "+ humanChoice + " beats " + computerChoice)
                    humanScore++;
                }
                if(humanChoice === "paper") {
                    computerScore++;
                    console.log("You lose! " + humanChoice + " loses to " + computerChoice)
                }
                break
    }
}
    }

let humanScore = 0
let computerScore = 0
    function playGame() {
for(i = 0; i<5;i++){
    playRound(getHumanChoice(),getComputerChoice())
}
    }

    playGame()
console.log("computerscore: " +computerScore)
console.log("humanscore: " + humanScore)