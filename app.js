const canvas = document.getElementById("canvas1");
const cvn = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;
let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;
let resetButton;
const background = new Image();
background.src = "stars2.jpg";
const bg = {
    x1:0,
    x2:canvas.width,
    y:0,
    width: canvas.width,
    height: canvas.height
}
function Background(){
    if(bg.x1  <= -bg.width + gameSpeed) bg.x1 = bg.width;
    else bg.x1 -= gameSpeed;
    if(bg.x2 <= -bg.width + gameSpeed) bg.x2 = bg.width;
    else(bg.x2 -= gameSpeed);
    cvn.drawImage(background, bg.x1, bg.y, bg.width, bg.height);
    cvn.drawImage(background, bg.x2, bg.y, bg.width, bg.height);

}
function startGame() {
  cvn.clearRect(0, 0, canvas.width, canvas.height);
  Background();
  Obstacles();
  ufo.draw();
  ufo.update();
  cvn.fillStyle='#FFFACD';
  cvn.font = "90px Roboto Mono";
  cvn.strokeText(score,450, 70);
  cvn.fillText(score, 450,70);
  cvn.fillStyle='#FFFACD';
  cvn.font = "90px Roboto Mono";
  Particles();
  Collisions();
if(Collisions()) return;
  requestAnimationFrame(startGame);
  angle += 0.12;
  hue++;
  frame++;
}
startGame();

function storage(){   
 result1 =  localStorage.setItem("result",score); 
  result = localStorage.getItem("result");
}
function showStorage(){
result = localStorage.getItem("result");
 } 

function resetGame(){
  cvn.font = "22px Roboto Mono";
  cvn.fillStyle = 'white';
  cvn.fillText('To reste game press Enter', 90, canvas.height/1.5)
  window.addEventListener("keydown", function(e) {
    if (e.code === "Enter"){
      window.location.reload();}
  })
}

window.addEventListener("keydown", function (e) {
  if (e.code === "Space") spacePressed  = true;
});

window.addEventListener("keyup", function (e) {
  if (e.code === "Space") spacePressed = false;
});
const crash = new Image();
crash.src = "crash.png";
function Collisions() {
  var  result;
  for (let i = 0; i <  obstaclesArray.length; i++) {
    if (
      ufo.x < obstaclesArray[i].x + obstaclesArray[i].width &&
      ufo.x + ufo.width > obstaclesArray[i].x &&
      ((ufo.y < 0 + obstaclesArray[i].top && ufo.y + ufo.height > 0) ||
        (ufo.y > canvas.height - obstaclesArray[i].bottom &&
          ufo.y + ufo.height < canvas.height))
    ) {
      if(localStorage.getItem("result")<score){
        
      localStorage.setItem("result",score); 
      }
       
      cvn.drawImage(crash, ufo.x, ufo.y, 50, 50);
      cvn.font = "22px Roboto Mono";
      cvn.fillStyle = 'white';
      cvn.fillText('Game is over, your score is '+ score, 90, canvas.height/2);
      cvn.fillText('Your the best score is '+ localStorage.getItem("result"), 90, canvas.height/1.7);
      resetGame();

      return true;
    }
  }
}









