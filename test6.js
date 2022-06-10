var Choises = ['paper', 'rock', 'scissors'];
var i = Math.floor(Math.random() * 3);
var ComputerChoice = Choises[i];
var UserPoints = 0;
var ComPoints = 0;
function result() {
  var result_div = (document.getElementById('result').innerHTML =
    UserPoints + ' - ' + ComPoints);
}
setInterval(result, 50);
function convert(word) {
  if (word == 'paper') return '<i class="fa">&#xf256;</i>';
  if (word == 'rock') return '<i class="fa">&#xf255;</i>';
  if (word == 'scissors') return '<i class="fa">&#xf257;</i>';
}
function game(Userchoice) {
  var box = document.getElementById('first');
  box.style.display = 'inline-flex';

  var userDiv = document.getElementById('yourchoice');
  userDiv.innerHTML = convert(Userchoice);

  var comDiv = document.getElementById('computerchoice');
  comDiv.innerHTML = convert(ComputerChoice);

  if (
    (Userchoice == 'paper' && ComputerChoice == 'rock') ||
    (Userchoice == 'rock' && ComputerChoice == 'scissors') ||
    (Userchoice == 'scissors' && ComputerChoice == 'paper')
  ) {
    win();
    console.log('win');
  } else if (Userchoice == ComputerChoice) {
    draw();
    console.log('draw');
  } else {
    tryagain();
    console.log('tryagain');
  }
}

function contonioGame() {
  i = Math.floor(Math.random() * 3);
  ComputerChoice = Choises[i];
  box.style.display = 'none';
}
setTimeout(contonioGame, 1200);
function win() {
  UserPoints++;
  document.getElementById('ruslt').innerHTML = 'you Win';
}
function draw() {
  document.getElementById('ruslt').innerHTML = 'Its a draw';
}
function tryagain() {
  ComPoints++;
  document.getElementById('ruslt').innerHTML = 'Try Again';
}
