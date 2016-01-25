'use strict'
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randomNum(0,9));
var counter = ''
//countdown to game start
var handleCountdown = function(){
(function(){
    counter = 4;
  setInterval(function() {
    counter--;
    if (counter > -1) {
      startGame.style.visibility = 'hidden';
      var span = document.getElementById('countdownCounter');
      span.innerHTML = counter;
    }
    if (counter === 0) {
      span.innerHTML = 'GO!';
    }
    if (counter < 0) {
      countdownCounter.style.visibility = 'hidden';
      clearInterval(counter);
    }
  }, 1000);
})();
}
//game timer
var handleGameClock = function() {
  (function() {
    var gameCounter = 25;
    setInterval(function() {
      gameCounter--;
      var gameClock = document.getElementById('gameClock');
      gameClock.innerHTML = gameCounter;
      if (gameCounter > 20) {
        gameClock.style.visibility = 'hidden';
        };
      if (gameCounter === 20) {
        gameClock.style.visibility = 'visible'
      }
      if (gameCounter === 0) {
        gameClock.innerHTML = 'Time\'s Up!';
        clearInterval(gameCounter);
      };
      if (gameCounter === -1) {
        gameClock.style.visibility = 'hidden';
        clearInterval(gameCounter);
      };
    }, 1000);
  })();
};

var hideInstructions = function(){
  var instruct = document.getElementById('instructions');
  instruct.style.visibility = 'hidden'
}

var button = document.getElementById('startGame');
startGame.addEventListener('click', handleCountdown);
startGame.addEventListener('click', handleGameClock);
startGame.addEventListener('click', hideInstructions);
