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
  // const randomNumber = Math.floor(Math.random() * PossibleChoices.length) + 1;

  if(randomNumber === 1) computerChoice = 'Rock';
  if(randomNumber === 2) computerChoice = 'Paper';
  if(randomNumber === 3) computerChoice = 'Scissors';

  ComputerChoiceDisplay.innerHTML = computerChoice;

  }

function getResult() {
  if(computerChoice === userChoice) result = 'It is a draw !';

  if(computerChoice === 'Rock' && userChoice === 'Paper') result = 'You Win !';
  if(computerChoice === 'Rock' && userChoice === 'Scissors') result = 'You Lose !';

  if(computerChoice === 'Paper' && userChoice === 'Scissors') result = 'You Win !';
  if(computerChoice === 'Paper' && userChoice === 'Rock') result = 'You Lose !';

  if(computerChoice === 'Scissors' && userChoice === 'Rock') result = 'You Win !';
  if(computerChoice === 'Scissors' && userChoice === 'Paper') result = 'You Lose !';

  ResultDisplay.innerHTML = result;
  
}