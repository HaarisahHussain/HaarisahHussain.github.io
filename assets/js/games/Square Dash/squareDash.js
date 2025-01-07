//This will retrieve the canvas from the HTML file and store this
//into the variable canvas. We create a variable called context which allows
//to draw onto canvas.
var canvas = document.getElementById("canvas");
var context  = canvas.getContext("2d");

// create variable to store images into
var square = new Image();
var background = new Image();
var foreground = new Image();
var objectTop = new Image();
var objectBottom = new Image();

//load images into variables
square.src = "images/square.png";
background.src = "images/background.png";
foreground.src = "images/foreground.png";
objectTop.src = "images/objectTop.png";
objectBottom.src = "images/objectBottom.png";

// create variable to store sound files into
var jump = new Audio();
var scorePoint = new Audio();
var hit = new Audio();
//load sound into variables
jump.src = "sound/jump.mp3";
scorePoint.src = "sound/scorePoint.mp3";
hit.src = "sound/hit.wav";

//created variable called gap to be used to add distance between pipes
var gap = 85;
//This variable adds gap + object height which will make sure both pipes are
//distanced between each other
var distanceObject;

//sets the location of the squareX and y location
var squareX = 10;
var squareY = 150;
//set gravity which is used to make square fall
var gravity = 1.5;
//create variable score and set it to 0
var score = 0;

// create an event to listen when the mouse clicked is pressed and then
//call the moveup function
document.addEventListener("click",moveUp);

//function moves the square up by 25 and plays
//the fly sound effect
function moveUp(){
    squareY -= 50;
    jump.play();

}

// create a object array
var objectArray = [];

//set the first element of object array to store the x and y values which
//sets x to 288 and y to 0
objectArray[0] = {
    x : canvas.width,
    y : 0
};
//main draw function that draws everything onto canvas and animates frames
function draw(){
    //draw background onto canvas
    context.drawImage(background,0,0);
    //Go through object array until you reach the end using for loop
    for(var i = 0; i < objectArray.length; i++){
        //set distance of object
        distanceObject = objectTop.height+gap;
        //draw the top object using the x and y values of the object array
        context.drawImage(objectTop,objectArray[i].x,objectArray[i].y);
        //draw the bottom object using the x and y values of the object array but
        //add distance to object value to y so this is spaced out
        //from the object at the top
        context.drawImage(objectBottom,objectArray[i].x,objectArray[i].y+distanceObject);
        //This will move the object x location from end of canvas to the left
        //so objects will appear to move toward bird
        objectArray[i].x--;
        //if the object x location gets to 125 which is end of screen
        // then set object array x to new location which is set to canvas width
        // and object array y location will be random
        if( objectArray[i].x == 125 ){
            objectArray.push({
                x : canvas.width,
                y : Math.floor(Math.random()*objectTop.height)-objectTop.height
            });
        }
        // Draw the foreground on to the canvas
        context.drawImage(foreground,0,canvas.height - foreground.height);
        //Draw the square image onto canvas using x and y position
        context.drawImage(square,squareX,squareY);
        // detect collision of square, object, canvas and foreground by checking object x and y
        //location and comparing with other object x and y
        if( squareX + square.width/2 >= objectArray[i].x && squareX <= objectArray[i].x + objectTop.width && (squareY+square.height <= objectArray[i].y +objectTop.height || squareY+square.height >= objectArray[i].y+distanceObject)
           || squareY + square.height >=  canvas.height - foreground.height){
			hit.play();
        
          
          clearInterval(game);
          window.open ("gameOver.html","mywindow");
        }
        // if the object x location is 5 then increment score and play sounds
        //as long as there is no collision.
        if(objectArray[i].x == 5){
            score++;
            scorePoint.play();
        }
    }

    //Set the Y of the square to increase by 1.5 which is gravity
    //so the square will always continue to fall
   squareY += gravity;

    //Set the text of the score to black
    //with a size of 20 and font style of verdana
    context.fillStyle = "White";
    context.font = "20px Verdana";
    //place the text score along with value of score
    //into x pos 10 and y which is 492(canvas height-20)
    context.fillText("Score : "+score,10,canvas.height-20);

}

// Call the function draw
let game = setInterval(draw,10);
