var humanWin = document.querySelector(".human-win-section");
var gameSelectScreen = document.querySelector(".game-type-view");
var classicGameBox = document.querySelector(".classic-game-box");
var difficultGameBox = document.querySelector(".difficult-game-box");
var classicGameView = document.querySelector(".classic-game-view");
var difficultGameView = document.querySelector(".difficult-game-view");
var computerWin = document.querySelector(".computer-win-section");
var computerWinTally = document.querySelector(".computer-wins");
var humanWinTally = document.querySelector(".human-wins");
var rockFighter = document.querySelector(".rock-fighter");
var paperFighter = document.querySelector(".paper-fighter");
var scissorsFighter = document.querySelector(".scissors-fighter");
var iguanaFighter = document.querySelector(".iguana-fighter");
var alienFighter = document.querySelector(".alien-fighter");
var changeGameButton = document.querySelector(".change-game-button");




classicGameBox.addEventListener('click',showClassicGame)
difficultGameBox.addEventListener('click',showDifficultGame)
changeGameButton.addEventListener('click',changeGame)



function showClassicGame(){
    gameSelectScreen.classList.add("hidden");
    classicGameView.classList.remove("hidden");
    changeGameButton.classList.remove("hidden");
}

function showDifficultGame(){
    gameSelectScreen.classList.add("hidden");
    classicGameView.classList.remove("hidden");
    difficultGameView.classList.remove("hidden");
    changeGameButton.classList.remove("hidden");
}

function changeGame(){
    gameSelectScreen.classList.remove("hidden");
    classicGameView.classList.add("hidden");
    difficultGameView.classList.add("hidden");
    changeGameButton.classList.add("hidden");
}