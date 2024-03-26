const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

//creating user and computer choices respectively
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * possibleChoices.length); //possibleCHoices = 3, cuz buttons = 3
  //   console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissor";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "It's a Draw!";
  } else if (computerChoice === "Rock" && userChoice === "Scissor") {
    result = "You Lose!";
  } else if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Win!";
  } else if (computerChoice === "Paper" && userChoice === "Scissor") {
    result = "You Win!";
  } else if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lose!";
  } else if (computerChoice === "Scissor" && userChoice === "Rock") {
    result = "You Win!";
  } else if (computerChoice === "Scissor" && userChoice === "Paper") {
    result = "You Lose!";
  }
  resultDisplay.innerHTML = result;
  //   window.alert(result);
}
