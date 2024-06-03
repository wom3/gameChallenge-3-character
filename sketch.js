/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var collectable;
var canyon;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
     collectable = {
        x_pos: 100,
        y_pos: floorPos_y-25,
        size: 50,
        isFound: false
    }
    
    canyon = {
        x_pos: 200,
        width: 100 
    }
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    
    // draw collectable
    if (dist(gameChar_x,gameChar_y,collectable.x_pos,collectable.y_pos) < 50){
        collectable.isFound = true
    }
    if (collectable.isFound == false){
        fill(255, 215, 0);
	    ellipse(collectable.x_pos+20, collectable.y_pos, collectable.size, collectable.size)    
    }
    
    
	//draw the canyon
    fill(139, 69, 19);
	rect(canyon.x_pos, floorPos_y, canyon.width, height - floorPos_y);
	//the game character
    stroke(0)
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        // face
        fill(222,184,135);
        ellipse(gameChar_x,gameChar_y-65,20);

        // neck
        fill(189,183,107);
        rect(gameChar_x-3,gameChar_y-56,5,5);

        // torso

        fill(0,0,139);
        quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);

        // Legs

        // Left Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x-8,gameChar_y-20,gameChar_x-5,gameChar_y-20,gameChar_x-10,gameChar_y-15,gameChar_x-12,gameChar_y-15);

        //Calf
        fill(0,100,0);
        rect(gameChar_x-12,gameChar_y-15, 3,4);
        // Foot

        fill(128,0,0);
        quad(gameChar_x-12,gameChar_y-11,gameChar_x-9,gameChar_y-11,gameChar_x-8,gameChar_y-3,gameChar_x-15,gameChar_y-3)

        // Right Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x+1,gameChar_y-20,gameChar_x+4,gameChar_y-20,gameChar_x-1,gameChar_y-15,gameChar_x-3,gameChar_y-15);

        //Calf
        fill(0,100,0);
        rect(gameChar_x-3,gameChar_y-15, 3,4);
        // Foot

        fill(128,0,0);
        quad(gameChar_x-3,gameChar_y-11,gameChar_x,gameChar_y-11,gameChar_x+1,gameChar_y-3,gameChar_x-6,gameChar_y-3)    

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right 
        // face
        fill(222,184,135);
        ellipse(gameChar_x,gameChar_y-65,20);

        // neck
        fill(189,183,107);
        rect(gameChar_x-3,gameChar_y-56,5,5);

        // torso

        fill(0,0,139);
        quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);

        // Legs

        // Left Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x-8,gameChar_y-20,gameChar_x-4,gameChar_y-20,gameChar_x-2,gameChar_y-16,gameChar_x-6,gameChar_y-16);

        //Calf
        fill(0,100,0);
        rect(gameChar_x-6,gameChar_y-16,3,4)
        // Foot

        fill(128,0,0);
        quad(gameChar_x-6,gameChar_y-12,gameChar_x-3,gameChar_y-12,gameChar_x-1,gameChar_y-4,gameChar_x-7,gameChar_y-4)

        // Right Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x+4,gameChar_y-20,gameChar_x+8,gameChar_y-20,gameChar_x+10,gameChar_y-16,gameChar_x+6,gameChar_y-16);

        //Calf
        fill(0,100,0);
        rect(gameChar_x+6,gameChar_y-16,3,4)

        // Foot
        fill(128,0,0);
        quad(gameChar_x+6,gameChar_y-12,gameChar_x+9,gameChar_y-12,gameChar_x+12,gameChar_y-4,gameChar_x+5,gameChar_y-4)

	}
	else if(isLeft)
	{
		// add your walking left code
        // face
        fill(222,184,135);
        ellipse(gameChar_x,gameChar_y-65,20);

        // neck
        fill(189,183,107);
        rect(gameChar_x-3,gameChar_y-56,5,5);

        // torso

        fill(0,0,139);
        quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);

        // Legs

        // Left Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x-8,gameChar_y-20,gameChar_x-5,gameChar_y-20,gameChar_x-10,gameChar_y-15,gameChar_x-12,gameChar_y-15);

        //Calf
        fill(0,100,0);
        rect(gameChar_x-12,gameChar_y-15, 3,5);
        // Foot

        fill(128,0,0);
        quad(gameChar_x-12,gameChar_y-10,gameChar_x-9,gameChar_y-10,gameChar_x-8,gameChar_y-2,gameChar_x-15,gameChar_y-2)

        // Right Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x+3,gameChar_y-20,gameChar_x+6,gameChar_y-20,gameChar_x+6,gameChar_y-14,gameChar_x+3,gameChar_y-14);

        //Calf
        fill(0,100,0);
        quad(gameChar_x+3,gameChar_y-14,gameChar_x+6,gameChar_y-14,gameChar_x+6,gameChar_y-8,gameChar_x+3,gameChar_y-8)

        // Foot

        fill(128,0,0);
        quad(gameChar_x+3,gameChar_y-8,gameChar_x+6,gameChar_y-8,gameChar_x+7,gameChar_y,gameChar_x,gameChar_y)

	}
	else if(isRight)
	{
		// add your walking right code
        // face
        fill(222,184,135);
        ellipse(gameChar_x,gameChar_y-65,20);

        // neck
        fill(189,183,107);
        rect(gameChar_x-3,gameChar_y-56,5,5);

        // torso

        fill(0,0,139);
        quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);

        // Legs

        // Left Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x-8,gameChar_y-20,gameChar_x-5,gameChar_y-20,gameChar_x-5,gameChar_y-14,gameChar_x-8,gameChar_y-14);

        //Calf
        fill(0,100,0);
        quad(gameChar_x-8,gameChar_y-14,gameChar_x-5,gameChar_y-14,gameChar_x-5,gameChar_y-8,gameChar_x-8,gameChar_y-8)

        // Foot

        fill(128,0,0);
        quad(gameChar_x-8,gameChar_y-8,gameChar_x-5,gameChar_y-8,gameChar_x-2,gameChar_y,gameChar_x-9,gameChar_y)

        // Right Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x+3,gameChar_y-20,gameChar_x+6,gameChar_y-20,gameChar_x+8,gameChar_y-13,gameChar_x+5,gameChar_y-13);

        //Calf
        fill(0,100,0);
        quad(gameChar_x+5,gameChar_y-13,gameChar_x+8,gameChar_y-13,gameChar_x+8,gameChar_y-8,gameChar_x+5,gameChar_y-8)

        // Foot

        fill(128,0,0);
        quad(gameChar_x+5,gameChar_y-8,gameChar_x+8,gameChar_y-8,gameChar_x+11,gameChar_y-1,gameChar_x+4,gameChar_y-1)
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        fill(222,184,135);
        ellipse(gameChar_x,gameChar_y-65,20);

        // neck
        fill(189,183,107);
        rect(gameChar_x-3,gameChar_y-56,5,5);

        // torso

        fill(0,0,139);
        quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);

        // Legs

        // Left Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x-8,gameChar_y-25,gameChar_x-5,gameChar_y-25,gameChar_x-5,gameChar_y-19,gameChar_x-8,gameChar_y-19);

        // Calf
        fill(0,100,0);
        quad(gameChar_x-8,gameChar_y-19,gameChar_x-5,gameChar_y-19,gameChar_x-6,gameChar_y-13,gameChar_x-9,gameChar_y-13);

        // Foot
        fill(128,0,0);
        quad(gameChar_x-9,gameChar_y-13,gameChar_x-6,gameChar_y-13,gameChar_x-5,gameChar_y-5,gameChar_x-12,gameChar_y-5);

        // Right Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x+3,gameChar_y-25,gameChar_x+6,gameChar_y-25,gameChar_x+6,gameChar_y-19,gameChar_x+3,gameChar_y-19);

        // Calf
        fill(0,100,0);
        quad(gameChar_x+3,gameChar_y-19,gameChar_x+6,gameChar_y-19,gameChar_x+7,gameChar_y-13,gameChar_x+4,gameChar_y-13);

        // Foot
        fill(128,0,0);
        quad(gameChar_x+4,gameChar_y-13,gameChar_x+7,gameChar_y-13,gameChar_x+10,gameChar_y-5,gameChar_x+3,gameChar_y-5);
	}
	else
	{
		// add your standing front facing code
        // face
        fill(222,184,135);
        ellipse(gameChar_x,gameChar_y-65,20);

        // neck
        fill(189,183,107);
        rect(gameChar_x-3,gameChar_y-56,5,5);

        // torso

        fill(0,0,139);
        quad(gameChar_x-10,gameChar_y-51,gameChar_x+8,gameChar_y-51,gameChar_x+6,gameChar_y-20,gameChar_x-8,gameChar_y-20);

        // Legs

        // Left Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x-8,gameChar_y-20,gameChar_x-5,gameChar_y-20,gameChar_x-5,gameChar_y-14,gameChar_x-8,gameChar_y-14);

        //Calf
        fill(0,100,0);
        quad(gameChar_x-8,gameChar_y-14,gameChar_x-5,gameChar_y-14,gameChar_x-5,gameChar_y-8,gameChar_x-8,gameChar_y-8)

        // Foot

        fill(128,0,0);
        quad(gameChar_x-8,gameChar_y-8,gameChar_x-5,gameChar_y-8,gameChar_x-4,gameChar_y,gameChar_x-11,gameChar_y)
        // Right Side

        // Thigh
        fill(233,150,122);
        quad(gameChar_x+3,gameChar_y-20,gameChar_x+6,gameChar_y-20,gameChar_x+6,gameChar_y-14,gameChar_x+3,gameChar_y-14);

        //Calf
        fill(0,100,0);
        quad(gameChar_x+3,gameChar_y-14,gameChar_x+6,gameChar_y-14,gameChar_x+6,gameChar_y-8,gameChar_x+3,gameChar_y-8)

        // Foot

        fill(128,0,0);
        quad(gameChar_x+3,gameChar_y-8,gameChar_x+6,gameChar_y-8,gameChar_x+9,gameChar_y,gameChar_x+2,gameChar_y)

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
       if (!isPlummeting) {
        if (isLeft) {
            gameChar_x = max(gameChar_x - 5, 0);
        }
        if (isRight) {
            gameChar_x = min(gameChar_x + 5, width);
        }
    }

    if (gameChar_y < floorPos_y) {
        gameChar_y += 2;
        isFalling = true;
    }
    else {
        isFalling = false;
    }
    
     // Falling down the canyon
    if (gameChar_x > canyon.x_pos && gameChar_x < canyon.x_pos + canyon.width && gameChar_y >= floorPos_y) {
        isPlummeting = true;
    }

    // Make character fall when plummeting
    if (isPlummeting) {
        gameChar_y += 5;
    }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    if ((keyCode == 37 || keyCode ==65) && !isPlummeting)
    {
        isLeft = true;        
    }
    else if ((keyCode == 39 || keyCode == 83) && !isPlummeting)
    {
        isRight = true;
    }
    else if ((keyCode == 32 || keyCode == 87) && !isFalling && !isPlummeting)
    {
        gameChar_y -= 100; 
    }
	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    
    if (keyCode == 37 || keyCode == 65)
    {
        isLeft = false;        
    }
    else if (keyCode == 39 || keyCode == 83)
    {
        isRight = false;
    }
    
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
