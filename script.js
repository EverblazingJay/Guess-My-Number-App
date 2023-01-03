'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.number').textContent = 7;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.guess').value);
// console.log((document.querySelector('.guess').value = 21));
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const openMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'No Number!')
    );
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '27rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      openMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      openMessage('You Lost The Game');
    }

    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost The Game!';
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost The Game!';
    //   }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = '';
  openMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // location.reload();
});
