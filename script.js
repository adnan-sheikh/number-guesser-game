let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Generating Random target value between 0 to 9
const generateTarget = () => Math.floor(Math.random() * 10);

// test case:
// console.log(generateTarget());

// helper function
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);


// return true if human guess is closest to target than computer guess and in case of tie
const compareGuesses = (humanGuess, computerGuess, target) => {
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Please guess from 0 to 9 only!');
    } else {
        const humanDeviation = getAbsoluteDistance(humanGuess, target);
        const computerDeviation = getAbsoluteDistance(computerGuess, target);
        return (humanDeviation <= computerDeviation);
    }
};

// test case:
// console.log(compareGuesses(2, 8, 9)); // false
// console.log(compareGuesses(8, 2, 9)); // true
// console.log(compareGuesses(8, 8, 9)); // true

// increment score based on winner
const updateScore = winner => (winner === 'human') ? humanScore++ : computerScore++;

// increment round counter
const advanceRound = () => currentRoundNumber++;

// test case:
// updateScore('human');
// console.log(humanScore); // To confirm that this value increased by 1
// updateScore('computer');
// console.log(computerScore); // To confirm that this value increased by 1