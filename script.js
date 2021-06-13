'use strict';
//secret number generator
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//initial score
let score = 20;

//for testing purpose secret number will be displayed instaed of ?
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //all  scenarios

  //when no input entered
  if (!guess) {
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

    //increase score for correct guess
    score++;
    document.querySelector('.score').textContent = score;

    //when our guess is higher than secretnumber.
  } else if (guess > secretNumber) {
    //we will check until score becomes zero
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';

      //for wrong guess decrease score
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
