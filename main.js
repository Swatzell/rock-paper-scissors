var alienFighter = document.querySelector(".alien-fighter");
var changeGameButton = document.querySelector(".change-game-button");
var chooseGameHeader = document.querySelector(".choose-game");
var classicGameBox = document.querySelector(".classic-game-box");
var classicGameView = document.querySelector(".classic-game-view");
var classicPaperFighter = document.querySelector("#classic-paper");
var classicRockFighter = document.querySelector("#classic-rock");
var classicScissorsFighter = document.querySelector("#classic-scissors");
var computerChoice = document.querySelector(".computer-choice");
var computerWin = document.querySelector(".computer-win-section");
var computerWinTally = document.querySelector(".computer-wins");
var difficultGameBox = document.querySelector(".difficult-game-box");
var difficultGameView = document.querySelector(".difficult-game-view");
var difficultPaperFighter = document.querySelector("#difficult-paper");
var difficultRockFighter = document.querySelector("#difficult-rock");
var difficultScissorsFighter = document.querySelector("#difficult-scissors");
var fighterGameView = document.querySelector(".fighter-game-view");
var gameSelectScreen = document.querySelector(".game-type-view");
var humanWin = document.querySelector(".human-win-section");
var humanWinTally = document.querySelector(".human-wins");
var lizardFighter = document.querySelector(".lizard-fighter");
var userChoice = document.querySelector(".user-choice");



var humanChoice
var classicComputerChoice
var difficultComputerChoice
var humanPlayer = createPlayer('Human', '👱🏻');
var computerPlayer = createPlayer('Computer', '💻')





function showClassicGame(){
    chooseGameHeader.innerText = "Choose your fighter!";
    gameSelectScreen.classList.add("hidden");
    classicGameView.classList.remove("hidden");
    changeGameButton.classList.remove("hidden");
}

function showDifficultGame(){
    chooseGameHeader.innerText = "Choose your fighter!";
    gameSelectScreen.classList.add("hidden");
    classicGameView.classList.add("hidden");
    difficultGameView.classList.remove("hidden");
    changeGameButton.classList.remove("hidden");
}

function changeGame(){
    chooseGameHeader.innerText = "Choose your game!";
    gameSelectScreen.classList.remove("hidden");
    classicGameView.classList.add("hidden");
    difficultGameView.classList.add("hidden");
    changeGameButton.classList.add("hidden");
}




function createPlayer(name, token) {
    
    return {
    name: name,
    token: token,
    wins: 0
    };
}
    

function generateClassicComputerChoice() {
    var classicChoices = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * classicChoices.length);
    classicComputerChoice = classicChoices[randomIndex]
    return classicChoices[randomIndex];
}

function generateDifficultComputerChoice() {
    var difficultChoices = ['rock', 'paper', 'scissors','lizard','alien'];
    var randomIndex = Math.floor(Math.random() * difficultChoices.length);
    difficultComputerChoice = difficultChoices[randomIndex]
    return difficultChoices[randomIndex];
}


function classicWinConditions() {
        
    if (
        (humanChoice === "rock" && classicComputerChoice === "scissors") ||
        (humanChoice === "paper" && classicComputerChoice === "rock") ||
        (humanChoice === "scissors" && classicComputerChoice === "paper")
    ) {
        humanPlayer.wins++;
        humanWinTally.innerText = `Wins:${humanPlayer.wins}`;
        chooseGameHeader.innerText = `${humanPlayer.name} wins!`;
    } else if (humanChoice === classicComputerChoice) {
        chooseGameHeader.innerText = `Its a draw!`;

    } else {
        computerPlayer.wins++;
        computerWinTally.innerText = `Wins:${computerPlayer.wins}`;
        chooseGameHeader.innerText = `Mwahahaha ${computerPlayer.name} wins again!`;
    }
    setTimeout(resetClassicGame,2000)
}

function difficultWinConditions() {
    if (
        (humanChoice === 'rock' && (difficultComputerChoice === 'scissors' || difficultComputerChoice === 'lizard')) ||
        (humanChoice === 'paper' && (difficultComputerChoice === 'rock' || difficultComputerChoice === 'alien')) ||
        (humanChoice === 'scissors' && (difficultComputerChoice === 'paper' || difficultComputerChoice === 'lizard')) ||
        (humanChoice === 'lizard' && (difficultComputerChoice === 'paper' || difficultComputerChoice === 'alien')) ||
        (humanChoice === 'alien' && (difficultComputerChoice === 'scissors' || difficultComputerChoice === 'rock'))
    ) {
        humanPlayer.wins++;
        humanWinTally.innerText = `Wins:${humanPlayer.wins}`;
        chooseGameHeader.innerText = `${humanPlayer.name} wins!`;
     
    } else if (humanChoice === difficultComputerChoice) {
            chooseGameHeader.innerText = `Its a draw!`;
    } else {
        computerPlayer.wins++;
        computerWinTally.innerText = `Wins:${computerPlayer.wins}`;
        chooseGameHeader.innerText = `Mwahahaha ${computerPlayer.name} wins again!`;
    }
    setTimeout(resetDifficultGame,2000)
}

function resetClassicGame() {
    userChoice.innerHTML = ""
    computerChoice.innerHTML = ""
    classicGameView.classList.remove("hidden")
    fighterGameView.classList.add("hidden")
    chooseGameHeader.innerText = "Choose your fighter!";
    }
    
function resetDifficultGame() {
    userChoice.innerHTML = ""
    computerChoice.innerHTML = ""
    difficultGameView.classList.remove("hidden")
    fighterGameView.classList.add("hidden")
    chooseGameHeader.innerText = "Choose your fighter!";
    }
        
    