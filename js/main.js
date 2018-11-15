const app = {}

// Create canvas
app.canvas = document.getElementById("canvas");
app.ctx = app.canvas.getContext("2d");
app.canvas.width = 500;
app.canvas.height = 500;

app.ctx.imageSmoothingEnabled = false;

// Array of images
app.images = {};
app.images.blueDino = new Image();
app.images.blueDino = "./assets/dinoCharacters/blueDino.png";
app.images.redDino = new Image();
app.images.redDino = "./assets/dinoCharacters/redDino.gif";
app.images.yellowDino = new Image(); 
app.images.yellowDino = "./assets/dinoCharacters/yellowDino.gif"; 
app.images.greenDino = new Image();
app.images.greenDino = "./assets/dinoCharacters/greenDino.gif";
app.images.heart = new Image();
app.images.heart = ".assets/heart.png";
app.images.steak = new Image();
app.images.steak = ".assets/Steak.png";
app.images.meteor = new Image();
app.images.meteor = ".assets/meteor.png";


// Add dino to canvas 
// Original Position of Dino
app.dinoPosX = app.canvas.width / 2 - 40;
app.dinoPosY = app.canvas.height - 100;

app.image = new Image();
app.image.src = app.images.redDino;
app.chosenDino = app.ctx.drawImage(app.image, app.dinoPosX, app.dinoPosY, 80, 80);

app.init = function(){
   app.move;
};

// Make dino move right and left using arrow keys
app.move = function(e) {
   if(e.keyCode == 39) { 
      app.dinoPosX+=15; 
   } //right arrow
   
   if(e.keyCode == 37) { 
      app.dinoPosX-=15; 
   } //left arrow

// Dino cannot go out of bounds
   if(app.dinoPosX < 0) {
      app.dinoPosX = 0;
   }

   if(app.dinoPosX > app.canvas.width - 80) {
      app.dinoPosX = app.canvas.width - 80;
   }

   app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
   app.chosenDino = app.ctx.drawImage(app.image, app.dinoPosX, app.dinoPosY, 80, 80);
};

document.onkeydown = app.move;


// Steaks fall out of top of canvas 


$(function(){
   app.init();
});

// Pop-up comes up on load on top of the game asking the player to choose their dino and select start

// Make the pop-up disappear when the player clicks start (allow player to click "space" and "enter" to start game)

// Player's chosen dino shows up on the bottom of canvas

// Dino can move left and right with arrow keys

// Dino cannot go out of bounds 

// Steaks and meteors fall from the top of the canvas

// Steaks and meteors cannot go out of bounds

// If Dino misses steak, steak stays on the bottom of the canvas to be collected by the dino

// If dino eats steak, steak disappears and points increase by 100

// If dino misses meteor, meteor disappears 

// If dino collides with meteor, dino explodes and one life is lost

// Once all 4 lives are done, game over pop up appears 

// Player can click "enter" or "space" to play again and be brought back to "Start game" pop up 