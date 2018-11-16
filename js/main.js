const app = {}

// Create canvas
app.canvas = document.getElementById("canvas");
app.ctx = app.canvas.getContext("2d");
app.canvas.width = 500;
app.canvas.height = 500;

app.ctx.imageSmoothingEnabled = false;

// Game start setup
app.points = 0;

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
app.charactersAndItems = {};
// Player
app.charactersAndItems.dino = {
   name: "Blue",
   x: app.canvas.width / 2 - 40,
   y: app.canvas.height - 80,
   spdX: 25,
   spdY: 0,
   hp: 4,
   width: 80,
   height: 80,
};

// Draw player
app.playerImage = new Image();
app.playerImage.src = app.images.redDino;
app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);


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
   
   
   // Redraw meteors
   app.meteor = app.ctx.drawImage(app.meteorImage, app.charactersAndItems.meteor.x, app.charactersAndItems.meteor.y,app.charactersAndItems.meteor.width, app.charactersAndItems.meteor.height);

   app.meteor2 = app.ctx.drawImage(app.meteor2Image, app.charactersAndItems.meteor2.x, app.charactersAndItems.meteor2.y, app.charactersAndItems.meteor2.width, app.charactersAndItems.meteor2.height);

   app.meteor3 = app.ctx.drawImage(app.meteor3Image, app.charactersAndItems.meteor3.x,app.charactersAndItems.meteor3.y, app.charactersAndItems.meteor3.width, app.charactersAndItems.meteor3.height);

   // Redraw steaks
   app.steak = app.ctx.drawImage(app.steakImage, app.charactersAndItems.steak.x, app.charactersAndItems.steak.y, app.charactersAndItems.steak.width, app.charactersAndItems.steak.height);

   app.steak2 = app.ctx.drawImage(app.steak2Image, app.charactersAndItems.steak2.x, app.charactersAndItems.steak2.y, app.charactersAndItems.steak2.width, app.charactersAndItems.steak2.height);

   app.steak3 = app.ctx.drawImage(app.steak3Image, app.charactersAndItems.steak3.x, app.charactersAndItems.steak3.y, app.charactersAndItems.steak3.width, app.charactersAndItems.steak3.height);
};

document.onkeydown = app.charactersAndItems.moveDino;

// Random x coordinate generator for meteors and steaks
app.randomNumber = function (maxNumber) {
   return Math.floor((Math.random() * (maxNumber + 1)));
};

// Steaks
app.charactersAndItems.steak = {
   name: "Steak",
   x: app.randomNumber(app.canvas.width - 200),
   y: -75,
   spdX: 0,
   spdY: 1,
   width: 45,
   height: 45,
}

app.charactersAndItems.steak2 = {
   name: "Steak2",
   x: app.randomNumber(app.canvas.width - 150),
   y: -500,
   spdX: 0,
   spdY: 1.2,
   width: 45,
   height: 45,
}

app.charactersAndItems.steak3 = {
   name: "Steak3",
   x: app.randomNumber(app.canvas.width),
   y: -250,
   spdX: 0,
   spdY: 2,
   width: 45,
   height: 45,
}

// Meteors
app.charactersAndItems.meteor = {
   name: "Meteor",
   x: app.randomNumber(app.canvas.width - 200),
   y: -100,
   spdX: 0,
   spdY: 3,
   width: 45,
   height: 45,
}

app.charactersAndItems.meteor2 = {
   name: "Meteor2",
   x: app.randomNumber(app.canvas.width - 250),
   y: -400,
   spdX: 0,
   spdY: 2,
   width: 45,
   height: 45,
}

app.charactersAndItems.meteor3 = {
   name: "Meteor3",
   x: app.randomNumber(app.canvas.width - 300),
   y: -750,
   spdX: 0,
   spdY: 1.5,
   width: 45,
   height: 45,
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

// Make sure meteors are at least 50px away from each other
// app.meteorDistance = function(meteor1, meteor2, meteor3){
//    if ((meteor2.x - 50) < meteor1.x > (meteor2.x + 50) 
//    || (meteor3.x - 50) < meteor1.x > (meteor3.x + 50)) {
//       return false;
//    }
//    if ((meteor1.x - 50) < meteor2.x > (meteor1.x + 50)
//    || (meteor3.x - 50) < meteor2.x > (meteor3.x + 50)) {
//       return false;
//    }  
//    if ((meteor1.x - 50) < meteor3.x > (meteor1.x + 50)
//    || (meteor2.x - 50) < meteor3.x > (meteor2.x + 50)) {
//       return false;
//    } 
//    else {
//       return true;
//    }
// };
      
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
         alert("game over");
      }
   };

   // Meteor 2
   if (app.meteorCollision(app.charactersAndItems.dino, app.charactersAndItems.meteor2)){
      console.log("collide meteor 2")
      $(".lives li:last-child").remove();
      if ($(".lives li").length === 0) {
         alert("game over");
      }

   };

   // Meteor 3
   if (app.meteorCollision(app.charactersAndItems.dino, app.charactersAndItems.meteor3)){
      console.log("collide meteor 3")
      $(".lives li:last-child").remove();
      if ($(".lives li").length === 0) {
         alert("game over");
      }
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
      $(".point-counter").text(app.points);
   };

   // Steak 2
   if (app.steakCollision(app.charactersAndItems.dino, app.charactersAndItems.steak2)){
      console.log("collide steak 2")
      app.points += 100
      $(".point-counter").text(app.points);
   };

   // Steak 3
   if (app.steakCollision(app.charactersAndItems.dino, app.charactersAndItems.steak3)) {
      console.log("collide steak 3")
      app.points += 100
      $(".point-counter").text(app.points);
   };

   // begin animation loop
   requestAnimationFrame(app.animate);

   // boundaries for meteor
   // Meteor 1
   if (app.charactersAndItems.meteor.y > app.canvas.height - 50) {
      app.charactersAndItems.meteor.y = -app.canvas.height;
      app.charactersAndItems.meteor.x = app.randomNumber(app.canvas.width);
   }

   // Meteor 2
   if (app.charactersAndItems.meteor2.y > app.canvas.height - 50) {
      app.charactersAndItems.meteor2.y = -app.canvas.height;
      app.charactersAndItems.meteor2.x = app.randomNumber(app.canvas.width);
   }

   // Meteor 3
   if (app.charactersAndItems.meteor3.y > app.canvas.height - 50) {
      app.charactersAndItems.meteor3.y = -app.canvas.height;
      app.charactersAndItems.meteor3.x = app.randomNumber(app.canvas.width);
   }

   // boundaries for steak
   // Steak 1
   if (app.charactersAndItems.steak.y > app.canvas.height - 50) {
      app.charactersAndItems.steak.y = -app.canvas.height;
      app.charactersAndItems.steak.x = app.randomNumber(app.canvas.width);
   }

   // Steak 2
   if (app.charactersAndItems.steak2.y > app.canvas.height - 50) {
      app.charactersAndItems.steak2.y = -app.canvas.height;
      app.charactersAndItems.steak2.x = app.randomNumber(app.canvas.width);
   }

   // Steak 3
   if (app.charactersAndItems.steak3.y > app.canvas.height - 50) {
      app.charactersAndItems.steak3.y = -app.canvas.height;
      app.charactersAndItems.steak3.x = app.randomNumber(app.canvas.width);
   }

   // Redraw dino
   app.chosenDino = app.ctx.drawImage(app.playerImage, app.charactersAndItems.dino.x, app.charactersAndItems.dino.y, app.charactersAndItems.dino.width, app.charactersAndItems.dino.height);
};

// Lose a life if hit by a meteor 
// app.loseALife = function(){
//    for(let y = 0; y < app.charactersAndItems.dino.y; y++){
//       console.log("working1")
//       // console.log(y)
//    };
//    for(let x = 0; x < app.charactersAndItems.dino.x; x++){
//       console.log("working2");
//    };
//    for (let my = -47; my > app.charactersAndItems.meteor.y && my < app.canvas.height; my++){
//       console.log("working3");
//       // console.log(app.charactersAndItems.meteor.y)
//    };
//    for(let mx = 0; mx < app.charactersAndItems.meteor.x; mx++){
//       console.log("working4");
//    };

// };

app.init = function(){
   app.charactersAndItems.move;
   app.animate();
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