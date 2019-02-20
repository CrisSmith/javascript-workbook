'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    //appends 4 random letters from the leters array;
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

  
 
function generateHint(solution, guess) {

  //convert strings to arrays for looping
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  let correctLetters = 0;

   //if a loop going through solution array returns any matches with the letters in your guess array, incriment the correctLetterLocations variable to show how many matches were found; then set matched letters to null in the solutionsArray so that they are not counted again in the next loop(below)

    for (let i=0; i < solutionArray.length;i++) {
      if (solutionArray[i] === guessArray[i]) {
          correctLetterLocations++;
          solutionArray[i] = null;         
        }
      }
    //if a loop going through the letters of guessArray finds a match with the letters in solutionArray, log that a letter has been found 
    //create a variable to hold the index at which a match is found; if there are matches (found > -1), incriment correctLetters; set the found matches in the solutionsArray to null;
    for (let y =0; y < solutionArray.length; y++) {
      let found = solutionArray.indexOf(guessArray[y])
      if(found > -1) {
         correctLetters++;
          solutionArray[y] = null;   
      }
    }  
    return correctLetterLocations + '-' + correctLetters
  }

function mastermind(guess) {
  solution = 'abcd'; 
  if (guess == solution) {
    return "You Got It!!!!"
  }

  let hint = generateHint(solution, guess);
  board.push("here's a hint: " + hint);
  
  if (board.length == 10){ 
    console.log("Out of turns");
    return "Out of turns. Solution was " + solution;
  
  } 
  else {
    return "Try again!";
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    console.log(mastermind(guess))
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}

