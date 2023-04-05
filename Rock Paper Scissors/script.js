const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const ResultDisplay = document.getElementById('result');

const PossibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

PossibleChoices.forEach(PossibleChoices => PossibleChoices.addEventListener('click', (e) => {
  userChoice = e.target.id;
  UserChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}));

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  // const randomNumber = Math.random() * PossibleChoices.length;

  if(randomNumber === 1) computerChoice = 'rock';
  if(randomNumber === 2) computerChoice = 'paper';
  if(randomNumber === 3) computerChoice = 'scissors';

  ComputerChoiceDisplay.innerHTML = computerChoice;

  }

function getResult() {
  if(computerChoice === userChoice) result = 'its a draw !';

  if(computerChoice === 'rock' && userChoice === 'paper') result = 'you win !';
  if(computerChoice === 'rock' && userChoice === 'scissors') result = 'you lose !';

  if(computerChoice === 'paper' && userChoice === 'scissors') result = 'you win !';
  if(computerChoice === 'paper' && userChoice === 'rock') result = 'you lose !';

  if(computerChoice === 'scissors' && userChoice === 'rock') result = 'you win !';
  if(computerChoice === 'scissors' && userChoice === 'paper') result = 'you lose !';

  ResultDisplay.innerHTML = result;
  
}