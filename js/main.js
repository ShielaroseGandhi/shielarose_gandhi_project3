const app = {}

// Create canvas
app.canvas = document.getElementById("canvas");
app.ctx = app.canvas.getContext("2d");
app.canvas.width = 500;
app.canvas.height = 500;

// Add dino to canvas 
// Original Position of Dino
app.rectX = 210;
app.rectY = app.canvas.height - 100;

app.image = new Image();
app.image.src = "./assets/dinoCharacters/dino_mort/0.gif";
app.chosenDino = app.ctx.drawImage(app.image, app.rectX, app.rectY, 80, 80);

app.move = function(e) {
   if (e.keyCode == 39) { 
      app.rectX+=5; 
   } //right arrow
   
   if(e.keyCode == 37) { 
      app.rectX-=5; 
   } //left arrow

   app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);

   app.chosenDino = app.ctx.drawImage(app.image, app.rectX, app.rectY, 80, 80);
};

document.onkeydown = app.move;


// Playing with arrow keys 

// app.leftPressed = false;
// app.rightPressed = false;

// app.leftAndRightPressed = function(event) {
//    if (event.keyCode == 39) {
//       app.rightPressed = true;
//    } 
//    else if (event.keyCode == 37) {
//       app.leftPressed = true;
//    } 
//    else {

//    }
// };

// app.leftAndRightNotPressed = function(event) {
//    if (event.keyCode == 39) {
//       app.rightPressed = false;
//    }
//    else if (event.keyCode == 37) {
//       app.leftPressed = false;
//    }
//    else {

//    }
// };

// document.addEventListener('keydown',app.leftAndRightPressed, false);
// document.addEventListener('keyup', app.leftAndRightNotPressed, false);


// function draw() {
//    app.ctx.clearRect(0, 0, app.canvas.width, canvas.height);
//    if (rightPressed) {
//       app.chosenDino.x += 5;
//    }
//    else if (leftPressed) {
//       app.chosenDino.y -= 5;
//    }
//    app.ctx.drawImage(img, playerX, playerY);
//    requestAnimationFrame(draw);
// }






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