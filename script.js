
let humanScore = 0
let computerScore = 0
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
    const optionContainer = document.querySelector("#button-container")
    optionContainer.addEventListener("click", (event) => {

        let target = event.target
        switch(target.id) {
            case "rock": {
                playRound(target.id, getComputerChoice())
                break
}
            case "paper": {
                playRound(target.id, getComputerChoice())
                break
}
            case "scissors": {
                playRound(target.id, getComputerChoice())
                break
}

default: {
    console.log("No match found")
}
}
 }
)



function playRound(humanChoice, computerChoice) {
    const resultsDiv = document.querySelector("#results-div")

    let answerSet = []
    answerSet[0] = "rock"
    answerSet[1] = "paper"
    answerSet[2] = "scissors"
    if(!answerSet.includes(humanChoice)){
        console.log("Only input that is accepted are case-insensitive rock/paper/scissors")
        return
    }
    if(computerChoice === humanChoice) {
        const resultsSentence = document.createElement("div")
        resultsSentence.textContent = "Draw!!! You and the computer chose: " + computerChoice
        resultsDiv.appendChild(resultsSentence)
        return
    }


        switch (computerChoice) {
            case "rock": {
                if(humanChoice === "paper") {
                    const resultsSentence = document.createElement("div")
                    resultsSentence.textContent = "You win! "+ humanChoice + " beats " + computerChoice
                    resultsDiv.appendChild(resultsSentence)
                    humanScore++;
                }
                if(humanChoice === "scissors") {
                    const resultsSentence = document.createElement("div")
                    resultsSentence.textContent = "You lose! "+ humanChoice + " loses to " + computerChoice
                    resultsDiv.appendChild(resultsSentence)
                    computerScore++;
                }
                break
            }
            case "paper": {
                if(humanChoice === "scissors"){
                    const resultsSentence = document.createElement("div")
                    resultsSentence.textContent = "You win! "+ humanChoice + " beats " + computerChoice
                    resultsDiv.appendChild(resultsSentence)
                    humanScore++;
                }
                if(humanChoice === "rock") {
                    const resultsSentence = document.createElement("div")
                    resultsSentence.textContent = "You lose! "+ humanChoice + " loses to " + computerChoice
                    resultsDiv.appendChild(resultsSentence)
                    computerScore++;
                }
                break
        }
            case "scissors": {
                if(humanChoice === "rock") {
                    const resultsSentence = document.createElement("div")
                    resultsSentence.textContent = "You win! "+ humanChoice + " beats " + computerChoice
                    resultsDiv.appendChild(resultsSentence)
                    humanScore++;
                }
                if(humanChoice === "paper") {
                    const resultsSentence = document.createElement("div")
                    resultsSentence.textContent = "You lose! "+ humanChoice + " loses to " + computerChoice
                    resultsDiv.appendChild(resultsSentence)
                    computerScore++;
                }
                break
    }
    default: {
        console.log("No match found in playround")
        console.log(humanChoice, computerChoice)
    }
}

    const scoreDiv = document.querySelector("#scores")
    scoreDiv.textContent = "Your Score: " + humanScore + "    Computer Score: " + computerScore
    if(humanScore >= 5 || computerScore >= 5) {
        const winnerDiv = document.createElement("div")
        let winner = humanScore>computerScore ? "You": "Computer"
        console.log(winner)
        winnerDiv.textContent = winner + " won the Game by reaching 5 points first!!" 
        winnerDiv.style.cssText = "font-size: 48px; font-weight: bold;"
        resultsDiv.appendChild(winnerDiv)
        humanScore = 0
        computerScore = 0
    const scoreDiv = document.querySelector("#scores")
    scoreDiv.textContent = "Your Score: " + humanScore + "    Computer Score: " + computerScore
    }
    }

    const scoreDiv = document.querySelector("#scores")
    scoreDiv.textContent = "Your Score: " + humanScore + "    Computer Score: " + computerScore



console.log("computerscore: " +computerScore)
console.log("humanscore: " + humanScore)