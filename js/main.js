const app = {}

// Create canvas
app.canvas = document.getElementById("canvas");
app.ctx = app.canvas.getContext("2d");
app.canvas.width = 500;
app.canvas.height = 500;

app.ctx.imageSmoothingEnabled = false;


// Array of images
app.images = [];
app.images.blueDino = new Image();
app.images.blueDino = "./assets/dinoCharacters/blueDino.png";
app.images.redDino = new Image();
app.images.redDino = "./assets/dinoCharacters/redDino.gif";
app.images.yellowDino = new Image(); 
app.images.yellowDino = "./assets/dinoCharacters/yellowDino.gif"; 
app.images.greenDino = new Image();
app.images.greenDino = "./assets/dinoCharacters/greenDino.gif";
app.images.heart = new Image();
app.images.heart = "./assets/heart.png";
app.images.steak = new Image();
app.images.steak = "./assets/Steak.png";
app.images.meteor = new Image();
app.images.meteor = "./assets/meteor.png";


// Add dino to canvas 
app.charactersAndItems = {};
// Player
app.charactersAndItems.dino = {
   name: "Blue",
   x: app.canvas.width / 2 - 40,
   y: app.canvas.height - 80,
   spdX: 15,
   spdY: 0,
   hp: 4,
   width: 80,
   height: 80,
};

// Draw player
app.playerImage = new Image();
app.playerImage.src = app.images.redDino;
app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);

// Steaks
app.charactersAndItems.steak = {
   name: "Steak",
   x: app.canvas.width / 2 - 40,
   y: 0,
   spdX: 0,
   spdY: 15,
   width: 30,
   height: 30,
}

// Draw Steaks
app.steakImage = new Image();
app.steakImage.src = app.images.steak;
app.steak = app.ctx.drawImage(app.steakImage, app.charactersAndItems.steak.x, app.charactersAndItems.steak.y, app.charactersAndItems.steak.width, app.charactersAndItems.steak.height);


// Meteors
app.charactersAndItems.meteor = {
   name: "Meteor",
   x: app.canvas.width / 2,
   y: 0,
   spdX: 0,
   spdY: 15,
   width: 70,
   height: 70,
}

// Draw Meteors
app.meteorImage = new Image();
app.meteorImage.src = app.images.meteor;
app.meteor = app.ctx.drawImage(app.meteorImage, app.charactersAndItems.meteor.x, app.charactersAndItems.meteor.y, app.charactersAndItems.meteor.width, app.charactersAndItems.meteor.height);

// Move dino with arrow keys
app.charactersAndItems.moveDino = function(e){
   if (e.keyCode == 39) {
      app.charactersAndItems.dino.x += app.charactersAndItems.dino.spdX;
   } // right arrow

   if (e.keyCode == 37) {
      app.charactersAndItems.dino.x -= app.charactersAndItems.dino.spdX;
   } // left arrow

   // Dino cannot go out of bounds
   if (app.charactersAndItems.dino.x < 0) {
      app.charactersAndItems.dino.x = 0;
   }

   if (app.charactersAndItems.dino.x > app.canvas.width - 80) {
      app.charactersAndItems.dino.x = app.canvas.width - 80;
   }

   // Clear canvas 
   app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);

   // Redraw dino
   app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);

   // Redraw steak
   app.steak = app.ctx.drawImage(app.steakImage, app.charactersAndItems.steak.x, app.charactersAndItems.steak.y, app.charactersAndItems.steak.width, app.charactersAndItems.steak.height);

   // Redraw meteor
   app.meteor = app.ctx.drawImage(app.meteorImage, app.charactersAndItems.meteor.x, app.charactersAndItems.meteor.y, app.charactersAndItems.meteor.width, app.charactersAndItems.meteor.height);
};
document.onkeydown = app.charactersAndItems.moveDino;



app.init = function(){
   app.charactersAndItems.move;
};

// Make dino move right and left using arrow keys
// app.moveDino = function(e){
//    if(e.keyCode == 39) {
//       app.dino.posX += app.dino.spdX;
//    } // right arrow

//    if(e.keyCode == 37) {
//       app.dino.posX -= app.dino.spdX;
//    } // left arrow

//    // Dino cannot go out of bounds
//    if(app.dino.posX < 0) {
//       app.dino.posX = 0;
//    }

//    if(app.dino.posX > app.canvas.width - 80) {
//       app.dino.posX = app.canvas.width - 80;
//    }

//    app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);
//    app.chosenDino = app.ctx.drawImage(app.image, app.dino.posX, app.dino.posY, 80, 80);
// };



// // Steaks fall out of top of canvas 
// // Steaks
// app.steak = {
//    posX: 250,
//    posY: 250,
//    spdX: 0,
//    spdY: 10,
// };


// app.steak.posX += app.steak.spdX;
// app.steak.posY += app.steak.spdY;
// app.steak.image = new Image();
// app.steak.image.src = app.images.steak;
// app.ctx.drawImage(app.steak.image, app.steak.posX, app.steak.posY);




// // Meteors
// app.meteor = {
//    posX: 150,
//    posY: 150,
//    spdX: 0,
//    spdY: 15,
// };




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