'use strict';
//secret number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//initial score
let score = 20;
let highscore = 0;

//for testing purpose secret number will be displayed instead of ?
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //all  scenarios

  //negative number or number is not between 1 and 20.
  if (guess < 0 || guess > 20) {
    document.querySelector('.message').textContent =
      'Enter number between 1 and 20!';
    //when no input entered
  } else if (!guess) {
    document.querySelector('.message').textContent = 'No number!';

    //when correctly guessed
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🙋Correct Number!';

    //Display score instead of ?
    document.querySelector('.number').textContent = secretNumber;

    //changing background color when wins
    document.querySelector('body').style.backgroundColor = '#60b347'; //style.css has all these details

    //increase width and font size of secretnumber display
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.fontSize = '7rem';

    //set Highscore value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when our guess is higher than secretnumber.
  } else if (guess != secretNumber) {
    //we will check until score becomes zero
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';

      //for wrong guess decrease score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
//when click on again restore all values and start new game

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //restore background color
  document.querySelector('body').style.backgroundColor = '#222';
  //restore score
  document.querySelector('.score').textContent = 20;
  //restore message start guessing
  document.querySelector('.message').textContent = 'Start guessing...';
  //restore width and fontsize of correct displayed number with ?
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').style.fontSize = '6rem';
  //restore guess input field
  document.querySelector('.guess').value = '';
  //restore ?
  document.querySelector('.number').textContent = '?';
});
