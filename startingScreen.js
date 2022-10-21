var currFrame;
var heroSSFrames = [];

class Cloud{
  constructor(x, y){
    this.pos = new p5.Vector(x,y);
    this.scroll = 2;
  }
  
  display(){
    fill(255);
    noStroke();
    rect(this.pos.x, this.pos.y, 70, 20);
    rect(this.pos.x + 10, this.pos.y - 10, 50, 40);
    this.pos.x += 2;
  }
}

class GameTitle{
  constructor(){
    this.gameSelected = false;
    this.state = 0; //0 for title screen, 1 for How to Play
    this.selector = 0; //0 for Start Game, 1 for How To Play
    this.clouds = [new Cloud(100, 200), new Cloud(300, 130), 
                   new Cloud(200, 40), new Cloud(30, 360), 
                   new Cloud(260, 300)];
    this.kidState = 0;
    currFrame = frameCount;
  }
  
  display(){
    background(135, 226, 235);
    for(let c = 0; c < this.clouds.length; c++){
      this.clouds[c].display();
      
      if(this.clouds[c].pos.x > 420){
        this.clouds.splice(c, 1);
        this.clouds.push(new Cloud(-80, random(20, 350)));
      }
    }
    
    //For switching from starting screen to how-to-play screen and vice versa
    switch(this.state){
      case 0:
        noStroke();
        fill(255, 0, 0);
        textSize(70);
        textFont('Cascadia Code');
        fill(255, 0, 0);
        text('The', 100, 190);
        text('Kid', 180, 240);
        textSize(10);
        text('Made by Santiago Solis', 140, 255);
        textSize(20);
        text('Start Game', 100, 280);
        text('How To Play', 100, 300);
        textSize(12);
        text('Press enter to select', 120, 330);
        text('Use W and S Keys to change selection', 80, 340);
        
        //Animating the kid
        switch(this.kidState){
          case 0:
            if(frameCount % 10 === 0){
              this.kidState = 1;
            }
            break;
            
          case 1:
            if(frameCount % 10 === 0){
              this.kidState = 0;
            }
            break;
        }
        
        image(heroSSFrames[this.kidState], 110, 122);
        
        //Controlling Selector:
        switch(this.selector){
          case 0:
            if((keyArray[87] === 1 || keyArray[83] === 1) && frameCount - currFrame > 10){
              currFrame = frameCount;
              this.selector = 1;
            }
            
            else{
              fill(255, 165, 0);
              triangle(77, 260, 92, 270, 77, 280);
              fill(255, 0, 0);
              triangle(80, 265, 95, 275, 80, 285);
            }
            break;
        
          case 1:
            if((keyArray[87] === 1 || keyArray[83] === 1) && frameCount - currFrame > 10){
              currFrame = frameCount;
              this.selector = 0;
            }
            
            else{
              fill(255, 165, 0);
              triangle(77, 280, 92, 290, 77, 300);
              fill(255, 0, 0);
              triangle(80, 285, 95, 295, 80, 305);
            }
            break;
        }
        
        if(keyArray[ENTER] === 1 && this.selector === 0 && frameCount - currFrame > 10){
          currFrame = frameCount;
          this.gameSelected = true;
        }
        
        if(keyArray[ENTER] === 1 && this.selector === 1 && frameCount - currFrame > 10){
          currFrame = frameCount;
          this.state = 1;
        }
        break;
      
      case 1:
        textSize(20);
        textFont('Cascadia Code');
        fill(255, 0, 0);
        text('How to play', 100, 100);
        textSize(16);
        text('~ Use A and D to move left\n  and right respectively', 80, 130);
        text('~ Use W to Jump', 80, 170);
        text('~ Use Spacebar to shoot\n  projectiles', 80, 190);
        text('~ You have a maximum of three\n  lives. Lose all and\n  you lose the game', 80, 230);
        text('~ Play with your imagination', 80, 290)
        textSize(12);
        text('Press enter to go back', 120, 330);
        
        if(keyArray[ENTER] === 1 && frameCount - currFrame > 10){
          currFrame = frameCount;
          this.state = 0;
          this.selector = 0;
        }
        break;
    }
  }
}