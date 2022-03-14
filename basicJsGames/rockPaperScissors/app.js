const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice = undefined;
let computerChoice = undefined;
let result = undefined;

possibleChoices.forEach((choices) =>
  choices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    resultDisplay.innerHTML = getResult(computerChoice, userChoice);
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    result = "draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lose";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lose";
  }
  return result;
}
