//Setup for what will be used in game
var logo;
var startingScreen;
var keyArray = [];
var gameState;

function preload() {
  heroSSFrames.push(loadImage('HeroStartScreenImages/hero_bent.png'));
  heroSSFrames.push(loadImage('HeroStartScreenImages/hero_stand.png'));
}

function keyPressed() {
  keyArray[keyCode] = 1;
}

function keyReleased() {
  keyArray[keyCode] = 0;
}

function setup() {
  createCanvas(400, 400);
  logo = new Logo();
  startingScreen = new GameTitle();
  gameState = 0;
}

function draw() {
  background(220);
  switch(gameState){
    case 0: //Logo is displayed
      if(logo.done){
        gameState++;
      }
      logo.display();
      break;
      
    case 1: //Starting Screen is displayed
      if(startingScreen.gameSelected){
        //gameState++;
        
        background(0);
        textFont('Consolas');
        textSize(20);
        text("In development", 70, 180);
        text("Come back soon!", 70, 195);
      }
      else{
        startingScreen.display();
      }
      break;
      
      // case 2: //The Actual Game which is in progress
      //   break;
  }
}