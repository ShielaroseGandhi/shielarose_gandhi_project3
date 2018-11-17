const app = {}

// Create canvas
app.canvas = document.getElementById("canvas");
app.ctx = app.canvas.getContext("2d");
app.canvas.width = canvas.clientWidth;
app.canvas.height = canvas.clientHeight;
app.ctx.imageSmoothingEnabled = false;

// Resize canvas when window is resized
app.resizeCanvas = function(){
   app.displayWidth = canvas.clientWidth;
   app.displayHeight = canvas.clientHeight;

   // Check if the canvas is not the same size.
   if (app.canvas.width != displayWidth 
      || app.canvas.height != displayHeight) {
      // Make the canvas the same size
      app.canvas.width = displayWidth;
      app.canvas.height = displayHeight;
   }
};


// Game start setup
// Points
app.points = 0;
$(".point-counter").text(app.points);

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
app.images.steak2 = new Image();
app.images.steak2 = "./assets/Steak2.png";
app.images.steak3 = new Image();
app.images.steak3 = "./assets/Steak3.png";
app.images.meteor = new Image();
app.images.meteor = "./assets/meteor.png";
app.images.meteor2 = new Image();
app.images.meteor2 = "./assets/meteor2.png";
app.images.meteor3 = new Image();
app.images.meteor3 = "./assets/meteor3.png";


// Add dino to canvas 
// Draw player
app.playerImage = new Image();
app.playerImage.src = app.images.blueDino;


app.charactersAndItems = {};
// Player
app.charactersAndItems.dino = {
   name: "Blue",
   x: app.canvas.width / 2 - 40,
   y: app.canvas.height - 80,
   spdX: 30,
   spdY: 0,
   hp: 4,
   width: 65,
   height: 65,
};

// Random x coordinate generator for meteors and steaks
app.randomNumber = function(maxNumber) {
   console.log(maxNumber);
   let randomX = Math.floor((Math.random() * (maxNumber + 1)));
   // randomX += 10;
   // if (randomX > maxNumber) {
   //    randomX = maxNumber - 50;
   // }
   return randomX
};

// Steaks
app.charactersAndItems.steak = {
   name: "Steak1",
   x: app.randomNumber(app.canvas.width - 50),
   y: -800,
   spdX: 0,
   spdY: 2,
   width: 45,
   height: 45,
}

app.charactersAndItems.steak2 = {
   name: "Steak2",
   x: app.randomNumber(app.canvas.width - 50),
   y: -1000,
   spdX: 0,
   spdY: 2,
   width: 45,
   height: 45,
}

app.charactersAndItems.steak3 = {
   name: "Steak3",
   x: app.randomNumber(app.canvas.width - 50),
   y: -250,
   spdX: 0,
   spdY: 1.5,
   width: 45,
   height: 45,
}

// Meteors
app.charactersAndItems.meteor = {
   name: "Meteor",
   x: app.randomNumber(app.canvas.width - 50),
   y: -600,
   spdX: 0,
   spdY: 1.5,
   width: 65,
   height: 65,
}

app.charactersAndItems.meteor2 = {
   name: "Meteor2",
   x: app.randomNumber(app.canvas.width - 50),
   y: -500,
   spdX: 0,
   spdY: 2,
   width: 75,
   height: 75,
}

app.charactersAndItems.meteor3 = {
   name: "Meteor3",
   x: app.randomNumber(app.canvas.width - 50),
   y: -1200,
   spdX: 0,
   spdY: 1,
   width: 65,
   height: 65,
}

// Collision function for meteor
app.meteorCollision = function (dino, meteor) {
   if (!(meteor.y === dino.y)) {
      return false;
   }
   if (meteor.x > (dino.x - meteor.width) && meteor.x < (dino.x + dino.width)) {
      return true;
   } else
   return false;
};

// && (meteor.y === dino.y)

// Collision function for steak
app.steakCollision = function (dino, steak) {
   if (!(steak.y === dino.y)) {
      return false;
   }
   if (steak.x > (dino.x - steak.width) && steak.x < (dino.x + dino.width)) {
      return true;
   } else
      return false;
};

// Move dino with arrow keys on screen
$(".right").on("click", function (e) {
   e.preventDefault();
   app.charactersAndItems.dino.x += app.charactersAndItems.dino.spdX;
   // Dino cannot go out of bounds
   if (app.charactersAndItems.dino.x < 0) {
      app.charactersAndItems.dino.x = 0;
   }

   if (app.charactersAndItems.dino.x > app.canvas.width - 70) {
      app.charactersAndItems.dino.x = app.canvas.width - 70;
   }
});

$(".left").on("click", function (e) {
   e.preventDefault();
   app.charactersAndItems.dino.x -= app.charactersAndItems.dino.spdX;
   // Dino cannot go out of bounds
   if (app.charactersAndItems.dino.x < 0) {
      app.charactersAndItems.dino.x = 0;
   }

   if (app.charactersAndItems.dino.x > app.canvas.width - 70) {
      app.charactersAndItems.dino.x = app.canvas.width - 70;
   }
});

// Keyboard functions - use arrow keys and click enter to start game
$(document).keypress(function (e) {
   if (e.keyCode == 13) {
      app.animate();
      $(".start-game").addClass("disappear");
      app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);
   } // start game by clicking enter key

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

   if (app.charactersAndItems.dino.x > app.canvas.width - 70) {
      app.charactersAndItems.dino.x = app.canvas.width - 70;
   }
});
      
// Animate meteors
app.animate = function(){
   // Clear canvas 
   app.ctx.clearRect(0, 0, app.canvas.width, app.canvas.height);

   // Draw meteors
   app.meteorImage = new Image();
   app.meteorImage.src = app.images.meteor;
   app.meteor = app.ctx.drawImage(app.meteorImage, app.charactersAndItems.meteor.x, app.charactersAndItems.meteor.y,app.charactersAndItems.meteor.width, app.charactersAndItems.meteor.height);

   app.meteor2Image = new Image();
   app.meteor2Image.src = app.images.meteor2;
   app.meteor2 = app.ctx.drawImage(app.meteor2Image, app.charactersAndItems.meteor2.x,app.charactersAndItems.meteor2.y,app.charactersAndItems.meteor2.width, app.charactersAndItems.meteor2.height);

   app.meteor3Image = new Image();
   app.meteor3Image.src = app.images.meteor3;
   app.meteor3 = app.ctx.drawImage(app.meteor3Image, app.charactersAndItems.meteor3.x,app.charactersAndItems.meteor3.y,app.charactersAndItems.meteor3.width, app.charactersAndItems.meteor3.height);

   // velocity of meteors
   app.charactersAndItems.meteor.y += app.charactersAndItems.meteor.spdY; // 1
   app.charactersAndItems.meteor2.y += app.charactersAndItems.meteor2.spdY; // 2
   app.charactersAndItems.meteor3.y += app.charactersAndItems.meteor3.spdY; // 3

   // Collision detection with meteors
   // Meteor 1
   if (app.meteorCollision(app.charactersAndItems.dino, app.charactersAndItems.meteor)){
      console.log("collide meteor 1")
      $(".lives li:last-child").remove();
      if($(".lives li").length === 0){
         $(".game-over").addClass("appear");
         return false
      } // remove a life every time a meteor and dino collide
      app.charactersAndItems.meteor.y = -app.canvas.height; // make meteor disappear once collision happens
   };

   // Meteor 2
   if (app.meteorCollision(app.charactersAndItems.dino, app.charactersAndItems.meteor2)){
      console.log("collide meteor 2")
      $(".lives li:last-child").remove();
      if ($(".lives li").length === 0) {
         $(".game-over").addClass("appear");
         return false
      } // remove a life every time a meteor and dino collide
      app.charactersAndItems.meteor2.y = -app.canvas.height; // make meteor disappear once collision happens
   };

   // Meteor 3
   if (app.meteorCollision(app.charactersAndItems.dino, app.charactersAndItems.meteor3)){
      console.log("collide meteor 3")
      $(".lives li:last-child").remove();
      if ($(".lives li").length === 0) {
         $(".game-over").addClass("appear");
         return false
      } // remove a life every time a meteor and dino collide
      app.charactersAndItems.meteor3.y = -app.canvas.height; // make meteor disappear once collision happens
   };

   // Draw steaks
   app.steakImage = new Image();
   app.steakImage.src = app.images.steak;
   app.steak = app.ctx.drawImage(app.steakImage, app.charactersAndItems.steak.x, app.charactersAndItems.steak.y, app.charactersAndItems.steak.width, app.charactersAndItems.steak.height);

   app.steak2Image = new Image();
   app.steak2Image.src = app.images.steak2;
   app.steak2 = app.ctx.drawImage(app.steak2Image, app.charactersAndItems.steak2.x, app.charactersAndItems.steak2.y, app.charactersAndItems.steak2.width, app.charactersAndItems.steak2.height);

   app.steak3Image = new Image();
   app.steak3Image.src = app.images.steak3;
   app.steak3 = app.ctx.drawImage(app.steak3Image, app.charactersAndItems.steak3.x, app.charactersAndItems.steak3.y, app.charactersAndItems.steak3.width, app.charactersAndItems.steak3.height);

   // velocity of steaks
   app.charactersAndItems.steak.y += app.charactersAndItems.steak.spdY; // 1
   app.charactersAndItems.steak2.y += app.charactersAndItems.steak2.spdY; // 2
   app.charactersAndItems.steak3.y += app.charactersAndItems.steak3.spdY; // 3


   // Collision detection with steaks
   // Steak 1
   if (app.steakCollision(app.charactersAndItems.dino, app.charactersAndItems.steak)){
      console.log("collide steak 1")
      app.points += 100
      $(".point-counter").text(app.points); // add 100 points every time steak and dino collide
      app.charactersAndItems.steak.y = -app.canvas.height; // make steak restart once collision happens
   };

   // Steak 2
   if (app.steakCollision(app.charactersAndItems.dino, app.charactersAndItems.steak2)){
      console.log("collide steak 2")
      app.points += 100
      $(".point-counter").text(app.points); // add 100 points every time steak and dino collide
      app.charactersAndItems.steak2.y = -app.canvas.height; // make steak restart once collision happens
   };

   // Steak 3
   if (app.steakCollision(app.charactersAndItems.dino, app.charactersAndItems.steak3)) {
      console.log("collide steak 3")
      app.points += 100
      $(".point-counter").text(app.points); // add 100 points every time steak and dino collide
      app.charactersAndItems.steak3.y = -app.canvas.height; // make steak restart once collision happens
   };

   // begin animation loop
   requestAnimationFrame(app.animate);

   // boundaries for meteor
   // Meteor 1
   if (app.charactersAndItems.meteor.y > app.canvas.height - 50) {
      app.charactersAndItems.meteor.y = -app.canvas.height;
      app.charactersAndItems.meteor.x = app.randomNumber(app.canvas.width - 50);
   }

   // Meteor 2
   if (app.charactersAndItems.meteor2.y > app.canvas.height - 50) {
      app.charactersAndItems.meteor2.y = -app.canvas.height;
      app.charactersAndItems.meteor2.x = app.randomNumber(app.canvas.width - 50);
   }

   // Meteor 3
   if (app.charactersAndItems.meteor3.y > app.canvas.height - 50) {
      app.charactersAndItems.meteor3.y = -app.canvas.height;
      app.charactersAndItems.meteor3.x = app.randomNumber(app.canvas.width - 50);
   }

   // boundaries for steak
   // Steak 1
   if (app.charactersAndItems.steak.y > app.canvas.height - 50) {
      app.charactersAndItems.steak.y = -app.canvas.height;
      app.charactersAndItems.steak.x = app.randomNumber(app.canvas.width - 50);
   }

   // Steak 2
   if (app.charactersAndItems.steak2.y > app.canvas.height - 50) {
      app.charactersAndItems.steak2.y = -app.canvas.height;
      app.charactersAndItems.steak2.x = app.randomNumber(app.canvas.width - 50);
   }

   // Steak 3
   if (app.charactersAndItems.steak3.y > app.canvas.height - 50) {
      app.charactersAndItems.steak3.y = -app.canvas.height;
      app.charactersAndItems.steak3.x = app.randomNumber(app.canvas.width - 50);
   }

   // Redraw dino
   app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);
   
};

// Find the checked dino and display a shadow underneath
dinoChecked = function(dinoNumber){
   let shadowNumber = ".shadow" + dinoNumber;
   if(dinoNumber == 1){
      $(".shadow1").removeClass("hide");
      $(".shadow2").addClass("hide");
      $(".shadow3").addClass("hide");
      $(".shadow4").addClass("hide");
      app.playerImage.src = app.images.blueDino;
   } else if (dinoNumber == 2) {
      $(".shadow1").addClass("hide");
      $(".shadow2").removeClass("hide");
      $(".shadow3").addClass("hide");
      $(".shadow4").addClass("hide");
      app.playerImage.src = app.images.redDino;
   } else if (dinoNumber == 3) {
      $(".shadow1").addClass("hide");
      $(".shadow2").addClass("hide");
      $(".shadow3").removeClass("hide");
      $(".shadow4").addClass("hide");
      app.playerImage.src = app.images.yellowDino;
   } else if (dinoNumber == 4) {
      $(".shadow1").addClass("hide");
      $(".shadow2").addClass("hide");
      $(".shadow3").addClass("hide");
      $(".shadow4").removeClass("hide");
      app.playerImage.src = app.images.greenDino;
   }
};

// Remove default of submit button on start
// Begin animations only when start button is clicked
// Hide start-game pop-up on start and draw the selected dino on canvas 
$(".start").on("click", function(event){
   event.preventDefault();
   app.animate();
   $(".start-game").addClass("disappear");
   app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);
});





// Init
app.init = function(){
   // app.charactersAndItems.move;
   // app.animate();
   // app.loseALife();
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