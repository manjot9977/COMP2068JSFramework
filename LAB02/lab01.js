const prompt = require('prompt');

// Function to generate computer's selection
function generateComputerSelection() {
  const randomNumber = Math.random();
  if (randomNumber <= 0.34) {
    return 'PAPER';
  } else if (randomNumber <= 0.67) {
    return 'SCISSORS';
  } else {
    return 'ROCK';
  }
}

// Function to determine the winner
function determineWinner(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "It's a tie";
  } else if (
    (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
    (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
  ) {
    return 'User Wins';
  } else {
    return 'Computer Wins';
  }
}

// Start prompt
prompt.start();

// Function to prompt user for selection
function promptUser() {
  prompt.get(['userSelection'], function (err, result) {
    if (err) {
      return console.error(err);
    }
    const userSelection = result.userSelection.toUpperCase();
    if (['ROCK', 'PAPER', 'SCISSORS'].includes(userSelection)) {
      const computerSelection = generateComputerSelection();
      
      console.log('User Selection:', userSelection);
      console.log('Computer Selection:', computerSelection);
  
      const resultMessage = determineWinner(userSelection, computerSelection);
      console.log('Outcome:', resultMessage);
    } else {
      console.log('Invalid input. Please enter ROCK, PAPER, or SCISSORS.');
      promptUser(); // Prompt user again for valid input
    }
  });
}

// Prompt user for selection
promptUser();
