const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChoice = undefined;
let computerChoice = undefined;
let result = undefined;
let bolIcon = undefined;

possibleChoices.forEach((choices) =>
  choices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    resultDisplay.innerHTML = getResult(computerChoice, userChoice)
      ? `<i id="icon-output-win" class="bi bi-shield-fill-check"> You win</i>`
      : `<i id="icon-output-lose" class="bi bi-shield-fill-x"> You lose</i>`;
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
    bolIcon = undefined;
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win";
    bolIcon = true;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lose";
    bolIcon = false;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win";
    bolIcon = true;
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lose";
    bolIcon = true;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win";
    bolIcon = true;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lose";
    bolIcon = true;
  }
  return bolIcon;
}
