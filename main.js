var alienFighter = document.querySelector(".alien-fighter");
var changeGameButton = document.querySelector(".change-game-button");
var chooseGameHeader = document.querySelector(".choose-game");
var classicGameBox = document.querySelector(".classic-game-box");
var classicGameView = document.querySelector(".classic-game-view");
var classicPaperFighter = document.querySelector("#classic-paper");
var classicRockFighter = document.querySelector("#classic-rock");
var classicScissorsFighter = document.querySelector("#classic-scissors");
var computerChoiceDisplay = document.querySelector(".computer-choice-display");
var computerWin = document.querySelector(".computer-win-section");
var computerWinTally = document.querySelector(".computer-wins");
var difficultGameBox = document.querySelector(".difficult-game-box");
var difficultGameView = document.querySelector(".difficult-game-view");
var difficultPaperFighter = document.querySelector("#difficult-paper");
var difficultRockFighter = document.querySelector("#difficult-rock");
var difficultScissorsFighter = document.querySelector("#difficult-scissors");
var fighterGameView = document.querySelector(".fighter-game-view");
var gameSelectScreen = document.querySelector(".game-type-view");
var humanChoiceDisplay = document.querySelector(".human-choice-display");
var humanWin = document.querySelector(".human-win-section");
var humanWinTally = document.querySelector(".human-wins");
var lizardFighter = document.querySelector(".lizard-fighter");

var humanChoice;
var classicComputerChoice;
var difficultComputerChoice;
var humanPlayer = createPlayer("Human", "👱🏻👩‍🦳");
var computerPlayer = createPlayer("Computer", "💻");

classicGameBox.addEventListener("click", showClassicGame);
difficultGameBox.addEventListener("click", showDifficultGame);
changeGameButton.addEventListener("click", function () {
  changeGame();
});

classicRockFighter.addEventListener("click", function () {
  humanChoice = "rock";
  displayHumanFighter();
  displayComputerFighter(generateClassicComputerChoice());
  classicWinConditions();
});
classicPaperFighter.addEventListener("click", function () {
  humanChoice = "paper";
  displayHumanFighter();
  displayComputerFighter(generateClassicComputerChoice());
  classicWinConditions();
});
classicScissorsFighter.addEventListener("click", function () {
  humanChoice = "scissors";
  displayHumanFighter();
  displayComputerFighter(generateClassicComputerChoice());
  classicWinConditions();
});
difficultRockFighter.addEventListener("click", function () {
  humanChoice = "rock";
  displayHumanFighter();
  displayComputerFighter(generateDifficultComputerChoice());
  difficultWinConditions();
});
difficultPaperFighter.addEventListener("click", function () {
  humanChoice = "paper";
  displayHumanFighter();
  displayComputerFighter(generateDifficultComputerChoice());
  difficultWinConditions();
});
difficultScissorsFighter.addEventListener("click", function () {
  humanChoice = "scissors";
  displayHumanFighter();
  displayComputerFighter(generateDifficultComputerChoice());
  difficultWinConditions();
});
lizardFighter.addEventListener("click", function () {
  humanChoice = "lizard";
  displayHumanFighter();
  displayComputerFighter(generateDifficultComputerChoice());
  difficultWinConditions();
});
alienFighter.addEventListener("click", function () {
  humanChoice = "alien";
  displayHumanFighter();
  displayComputerFighter(generateDifficultComputerChoice());
  difficultWinConditions();
});

function displayHumanFighter() {
  classicGameView.classList.add("hidden");
  difficultGameView.classList.add("hidden");
  fighterGameView.classList.remove("hidden");
  changeGameButton.classList.add("hidden");

  if (humanChoice === "rock") {
    humanChoiceDisplay.innerHTML = `<img class="rock-fighter" id= "rock"src="./assets/rock-hand.png" alt="rock hand"></img>`;
  } else if (humanChoice === "scissors") {
    humanChoiceDisplay.innerHTML = `<img class="scissors-fighter" src="./assets/lines-scissors.png" alt="scissors"></img>`;
  } else if (humanChoice === "paper") {
    humanChoiceDisplay.innerHTML = `<img class="paper-fighter" src="./assets/happy-paper.png" alt="paper"></img>`;
  } else if (humanChoice === "lizard") {
    humanChoiceDisplay.innerHTML = `<img class="lizard-fighter" src="./assets/iguana.png" alt="iguana"></img>`;
  } else if (humanChoice === "alien") {
    humanChoiceDisplay.innerHTML = `<img class="alien-fighter" src="./assets/flat-alien.png" alt="alien"></img>`;
  }
}

function displayComputerFighter(randomComputerChoice) {
  if (randomComputerChoice === "rock") {
    computerChoiceDisplay.innerHTML = `<img class="rock-fighter" id= "rock"src="./assets/rock-hand.png" alt="rock hand"></img>`;
  } else if (randomComputerChoice === "scissors") {
    computerChoiceDisplay.innerHTML = `<img class="scissors-fighter" src="./assets/lines-scissors.png" alt="scissors"></img>`;
  } else if (randomComputerChoice === "paper") {
    computerChoiceDisplay.innerHTML = `<img class="paper-fighter" src="./assets/happy-paper.png" alt="paper"></img>`;
  } else if (randomComputerChoice === "lizard") {
    computerChoiceDisplay.innerHTML = `<img class="lizard-fighter" src="./assets/iguana.png" alt="iguana">`;
  } else if (randomComputerChoice === "alien") {
    computerChoiceDisplay.innerHTML = `<img class="alien-fighter" src="./assets/flat-alien.png" alt="alien">`;
  }
}

function showClassicGame() {
  chooseGameHeader.innerText = "Choose your fighter!";
  gameSelectScreen.classList.add("hidden");
  classicGameView.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
}

function showDifficultGame() {
  chooseGameHeader.innerText = "Choose your fighter!";
  gameSelectScreen.classList.add("hidden");
  classicGameView.classList.add("hidden");
  difficultGameView.classList.remove("hidden");
  changeGameButton.classList.remove("hidden");
}

function changeGame() {
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
    wins: 0,
  };
}

function generateClassicComputerChoice() {
  var classicChoices = ["rock", "paper", "scissors"];
  var randomIndex = Math.floor(Math.random() * classicChoices.length);
  classicComputerChoice = classicChoices[randomIndex];
  return classicChoices[randomIndex];
}

function generateDifficultComputerChoice() {
  var difficultChoices = ["rock", "paper", "scissors", "lizard", "alien"];
  var randomIndex = Math.floor(Math.random() * difficultChoices.length);
  difficultComputerChoice = difficultChoices[randomIndex];
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
    chooseGameHeader.innerText = `${humanPlayer.token} ${humanPlayer.name} wins! ${humanPlayer.token}`;
  } else if (humanChoice === classicComputerChoice) {
    chooseGameHeader.innerText = `😩 Its a draw! 😩`;
  } else {
    computerPlayer.wins++;
    computerWinTally.innerText = `Wins:${computerPlayer.wins}`;
    chooseGameHeader.innerText = `${computerPlayer.token} Mwahaha ${computerPlayer.name} wins again! ${computerPlayer.token}`;
  }
  setTimeout(resetClassicGame, 2000);
}

function difficultWinConditions() {
  if (
    (humanChoice === "rock" &&
      (difficultComputerChoice === "scissors" ||
        difficultComputerChoice === "lizard")) ||
    (humanChoice === "paper" &&
      (difficultComputerChoice === "rock" ||
        difficultComputerChoice === "alien")) ||
    (humanChoice === "scissors" &&
      (difficultComputerChoice === "paper" ||
        difficultComputerChoice === "lizard")) ||
    (humanChoice === "lizard" &&
      (difficultComputerChoice === "paper" ||
        difficultComputerChoice === "alien")) ||
    (humanChoice === "alien" &&
      (difficultComputerChoice === "scissors" ||
        difficultComputerChoice === "rock"))
  ) {
    humanPlayer.wins++;
    humanWinTally.innerText = `Wins:${humanPlayer.wins}`;
    chooseGameHeader.innerText = `${humanPlayer.token} ${humanPlayer.name} wins! ${humanPlayer.token}`;
  } else if (humanChoice === difficultComputerChoice) {
    chooseGameHeader.innerText = `😩 Its a draw! 😩`;
  } else {
    computerPlayer.wins++;
    computerWinTally.innerText = `Wins:${computerPlayer.wins}`;
    chooseGameHeader.innerText = `${computerPlayer.token} Mwahaha ${computerPlayer.name} wins again! ${computerPlayer.token}`;
  }
  setTimeout(resetDifficultGame, 2000);
}

function resetClassicGame() {
  humanChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  classicGameView.classList.remove("hidden");
  fighterGameView.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  chooseGameHeader.innerText = "Choose your fighter!";
}

function resetDifficultGame() {
  humanChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = "";
  difficultGameView.classList.remove("hidden");
  fighterGameView.classList.add("hidden");
  changeGameButton.classList.remove("hidden");
  chooseGameHeader.innerText = "Choose your fighter!";
}
