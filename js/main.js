(() => {
  console.log('game js file loaded!');
//variables
const startScreen = document.querySelector('.start-screen'),
  holes = document.querySelectorAll('.hole'),
 scoreBoard = document.querySelector('.counter'),
 bugs = document.querySelectorAll('.bug'),
 startButtom = document.querySelector('button');
var lastHole,
timeUp = false,
score = 0,
timeleft = 10;

function countDown() {
var timer = setInterval(function(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(timer);
    },1000);
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 2000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  startScreen.classList.add('hide-start');
  peep();
  setTimeout(() => timeUp = true, 10000)

  if (timeUp == true){
    //add game over overlay try again
  }
}

function bonk(e) {
  score++;
  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

startButtom.addEventListener('click', startGame);
startButtom.addEventListener('click', countDown);
bugs.forEach(bug => bug.addEventListener('click', bonk));
})();
