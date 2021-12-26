let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 9 + 1);

const compareGuesses = (userGuess, computerGuess, secret) => {
    const userDifference = getAbsoluteDistance(userGuess, secret);
    const computerDifference = getAbsoluteDistance(computerGuess, secret);

    if (userDifference === computerDifference) return true;

    userDifference < computerDifference ? true : false;
}

const getAbsoluteDistance = (num, num1) => Math.abs(num - num1);

const updateScore = winner => winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;