class LetterS {
  constructor(x, y) {
    this.x = x;       //x position of S
    this.y = y;       //y position of S
    this.xOrig = x;   //first instance of x position
    this.yOrig = y;   //first instance of y position
    this.opacity = 0; //opacity of letter S
    this.stroke = 0;  //stroke of letter S
  }

  /*  display() Function:
  *   Displays the letter S as a combination of quadrilaterals.
  */
  display() {
    fill(this.opacity);
    stroke(this.stroke);
    quad(this.x + 25, this.y + 10, this.x + 90, this.y + 10, 
      this.x + 75, this.y + 30, this.x + 10, this.y + 30);    //Top part of S
    quad(this.x + 10, this.y + 30, this.x + 25, this.y + 30, 
      this.x + 25, this.y + 40, this.x + 10, this.y + 60);    //Link between top and middle part of S
    quad(this.x + 25, this.y + 40, this.x + 90, this.y + 40, 
      this.x + 75, this.y + 60, this.x + 10, this.y + 60);    //Middle part of S
    quad(this.x + 75, this.y + 60, this.x + 90, this.y + 40, 
      this.x + 90, this.y + 70, this.x + 75, this.y + 90);    //Link between middle and bottom part of S
    quad(this.x + 25, this.y + 70, this.x + 75, this.y + 70, 
      this.x + 75, this.y + 90, this.x + 10, this.y + 90);    //Bottom Part of S
  }
  

  /*  update() Function:
  *   Increases opacity and stroke variables until they both reach 150. This
  *   makes the fill and stroke of the letter S change by the same amount. Once
  *   the opacity reaches 150, stroke starts to decrease until it reaches 0.
  *   This is meant to show the outline of the letter S and make it look 3D.
  */
  update() {
    if(this.opacity < 150){
      this.opacity++;
      this.stroke++;
    }

    else if(this.stroke > 0){
      this.stroke -= 5;
    }
  }

  /*  move() Function:
  *   Moves the letter S towards the top right corner 45 pixels from both its
  *   x position and y position. 
  */
  move() {
    if (this.x < this.xOrig + 45){
      this.x++;
    }

    if (this.y > this.yOrig - 45){
      this.y--;
    }
  }
}

/*
*   LetterE Class:
*   Contains all of the components that make the display and modification of 
*   the letter E.
*/
class LetterE {
  constructor(x, y) {
    this.x = x;       //x position of E
    this.y = y;       //y position of E
    this.xOrig = x;   //first instance of x position
    this.yOrig = y;   //first instance of y position
    this.opacity = 0; //opacity of letter E
    this.stroke = 0;  //stroke of letter E
  }

  /*  display() Function:
  *   Displays the letter E as a combination of quadrilaterals.
  */
  display() {
    fill(this.opacity);
    stroke(this.stroke);
    quad(this.x + 25, this.y + 10, this.x + 90, this.y + 10, 
      this.x + 75, this.y + 30, this.x + 10, this.y + 30);    //Top part of E
    quad(this.x + 10, this.y + 30, this.x + 25, this.y + 30, 
      this.x + 25, this.y + 40, this.x + 10, this.y + 60);    //Link between top and middle part of E
    quad(this.x + 25, this.y + 40, this.x + 70, this.y + 40, 
      this.x + 55, this.y + 60, this.x + 10, this.y + 60);    //Middle part of E
    quad(this.x + 10, this.y + 60, this.x + 25, this.y + 60, 
      this.x + 25, this.y + 70, this.x + 10, this.y + 90);    //Link between middle and bottom part of E
    quad(this.x + 25, this.y + 70, this.x + 90, this.y + 70, 
      this.x + 75, this.y + 90, this.x + 10, this.y + 90);    //Bottom part of E
  }

  /*  update() Function:
  *   Increases opacity and stroke variables until they both reach 150. This
  *   makes the fill and stroke of the letter E change by the smae amount. Once
  *   the opacity reaches 150, stroke starts to decrease until it reaches 0.
  *   This is meant to show the outline of the letter E and make it look 3D.
  */
  update() {
    if(this.opacity < 150){
      this.opacity++;
      this.stroke++;
    }

    else if(this.stroke > 0){
      this.stroke -= 5;
    }
  }

  /*  move() Function:
  *   Moves the letter E towards the bottom left corner 45 pixels from both its
  *   x position and y position. 
  */
  move() {
    if (this.x > this.xOrig - 45){
      this.x--;
    }

    if (this.y < this.yOrig + 45){
      this.y++;
    }
  }
}

/*
*   EndText class:
*   Contains all of the components that make the display and modification of 
*   the end text. The end text begins fading in as the 3D letters' colors match
*   that of the background.
*/
class EndText {
  constructor(x, y) {
    this.x = x;       //x position of end text
    this.y = y;       //y position of end text
    this.opacity = 0; //opacity of end text
  }

  /*  display() function:
  *   Displays the text on screen if the opacity is greater than 47
  */
  display() {
    if (this.opacity > 47){
      fill(this.opacity);
      noStroke();
      textFont('Courier New');
      text('SESS Productions', this.x, this.y);
      textSize(16);
    }
  }

  /*  update() function:
  *   Increases the opacity of the text until it reaches 150
  */
  update() {
    if(this.opacity < 150){
      this.opacity++;
    }
  }
}

//Declaration of letters array and endtext variable

class Logo {
  constructor(){
    this.letters = [];
    this.letters[0] = new LetterS(60, 150);    
    this.letters[1] = new LetterE(240, 60);    
    this.letters[2] = new LetterS(60, 240);    
    this.letters[3] = new LetterS(150, 240);  
    this.endText = new EndText(115, 310); 
    this.done = false;
  }
  
  display() {
    background(47);                  
    this.letters.forEach(letter => { 
      letter.display();
      letter.update();
      letter.move();
  });
    this.endText.display();
    this.endText.update();
    if(frameCount > 230){
      this.done = true;
    }
  }
}
