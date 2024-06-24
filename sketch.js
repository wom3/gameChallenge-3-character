/*

The Game Project Part 4 - Side Scrolling

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

var trees_x;
var treePos_y;

var mountain;
var cloud;

var collectables;
var canyons;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  canyon = {
    x_pos: 200,
    width: 100,
  };

  trees_x = [300, 500, 900, 1150];
  treePos_y = height / 2;

  mountain = {
    x_pos: [-400, -280, 100, 400],
    y_pos: 100,
  };

  cloud = {
    x_pos: [0, 400, 600],
    y_pos: 100,
    size: 20,
  };

  collectables = [
    {
      x_pos: 100,
      y_pos: floorPos_y - 25,
      size: 40,
      isFound: false,
    },
    {
      x_pos: 200,
      y_pos: floorPos_y - 25,
      size: 20,
      isFound: false,
    },
    {
      x_pos: 300,
      y_pos: floorPos_y - 25,
      size: 50,
      isFound: false,
    },
    {
      x_pos: 400,
      y_pos: floorPos_y - 25,
      size: 30,
      isFound: false,
    },
    {
      x_pos: 600,
      y_pos: floorPos_y - 25,
      size: 60,
      isFound: false,
    },
  ];

  canyons = [
    {
      x_pos: 200,
      width: 130,
    },
    {
      x_pos: 400,
      width: 70,
    },
    {
      x_pos: 600,
      width: 150,
    },
  ];
}

function draw() {
  ///////////DRAWING CODE//////////

  background(100, 155, 255); //fill the sky blue

  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  // draw mountaints

  drawMountains();

  // Draw cloud

  drawClouds();

  // draw trees

  drawTrees();

  // draw collectable
  //    drawCollectable(collectable)

  for (var i = 0; i < collectables.length; i++) {
    checkCollectable(collectables[i]);
  }

  //draw the canyon
  for (var i = 0; i < canyons.length; i++) {
    drawCanyon(canyons[i]);
  }

  //the game character
  stroke(0);
  if (isLeft && isFalling) {
    // add your jumping-left code
    // face
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 65, 20);

    // neck
    fill(189, 183, 107);
    rect(gameChar_x - 3, gameChar_y - 56, 5, 5);

    // torso

    fill(0, 0, 139);
    quad(
      gameChar_x - 10,
      gameChar_y - 51,
      gameChar_x + 8,
      gameChar_y - 51,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x - 8,
      gameChar_y - 20
    );

    // Legs

    // Left Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x - 8,
      gameChar_y - 20,
      gameChar_x - 5,
      gameChar_y - 20,
      gameChar_x - 10,
      gameChar_y - 15,
      gameChar_x - 12,
      gameChar_y - 15
    );

    //Calf
    fill(0, 100, 0);
    rect(gameChar_x - 12, gameChar_y - 15, 3, 4);
    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x - 12,
      gameChar_y - 11,
      gameChar_x - 9,
      gameChar_y - 11,
      gameChar_x - 8,
      gameChar_y - 3,
      gameChar_x - 15,
      gameChar_y - 3
    );

    // Right Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x + 1,
      gameChar_y - 20,
      gameChar_x + 4,
      gameChar_y - 20,
      gameChar_x - 1,
      gameChar_y - 15,
      gameChar_x - 3,
      gameChar_y - 15
    );

    //Calf
    fill(0, 100, 0);
    rect(gameChar_x - 3, gameChar_y - 15, 3, 4);
    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x - 3,
      gameChar_y - 11,
      gameChar_x,
      gameChar_y - 11,
      gameChar_x + 1,
      gameChar_y - 3,
      gameChar_x - 6,
      gameChar_y - 3
    );
  } else if (isRight && isFalling) {
    // add your jumping-right
    // face
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 65, 20);

    // neck
    fill(189, 183, 107);
    rect(gameChar_x - 3, gameChar_y - 56, 5, 5);

    // torso

    fill(0, 0, 139);
    quad(
      gameChar_x - 10,
      gameChar_y - 51,
      gameChar_x + 8,
      gameChar_y - 51,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x - 8,
      gameChar_y - 20
    );

    // Legs

    // Left Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x - 8,
      gameChar_y - 20,
      gameChar_x - 4,
      gameChar_y - 20,
      gameChar_x - 2,
      gameChar_y - 16,
      gameChar_x - 6,
      gameChar_y - 16
    );

    //Calf
    fill(0, 100, 0);
    rect(gameChar_x - 6, gameChar_y - 16, 3, 4);
    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x - 6,
      gameChar_y - 12,
      gameChar_x - 3,
      gameChar_y - 12,
      gameChar_x - 1,
      gameChar_y - 4,
      gameChar_x - 7,
      gameChar_y - 4
    );

    // Right Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x + 4,
      gameChar_y - 20,
      gameChar_x + 8,
      gameChar_y - 20,
      gameChar_x + 10,
      gameChar_y - 16,
      gameChar_x + 6,
      gameChar_y - 16
    );

    //Calf
    fill(0, 100, 0);
    rect(gameChar_x + 6, gameChar_y - 16, 3, 4);

    // Foot
    fill(128, 0, 0);
    quad(
      gameChar_x + 6,
      gameChar_y - 12,
      gameChar_x + 9,
      gameChar_y - 12,
      gameChar_x + 12,
      gameChar_y - 4,
      gameChar_x + 5,
      gameChar_y - 4
    );
  } else if (isLeft) {
    // add your walking left code
    // face
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 65, 20);

    // neck
    fill(189, 183, 107);
    rect(gameChar_x - 3, gameChar_y - 56, 5, 5);

    // torso

    fill(0, 0, 139);
    quad(
      gameChar_x - 10,
      gameChar_y - 51,
      gameChar_x + 8,
      gameChar_y - 51,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x - 8,
      gameChar_y - 20
    );

    // Legs

    // Left Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x - 8,
      gameChar_y - 20,
      gameChar_x - 5,
      gameChar_y - 20,
      gameChar_x - 10,
      gameChar_y - 15,
      gameChar_x - 12,
      gameChar_y - 15
    );

    //Calf
    fill(0, 100, 0);
    rect(gameChar_x - 12, gameChar_y - 15, 3, 5);
    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x - 12,
      gameChar_y - 10,
      gameChar_x - 9,
      gameChar_y - 10,
      gameChar_x - 8,
      gameChar_y - 2,
      gameChar_x - 15,
      gameChar_y - 2
    );

    // Right Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x + 3,
      gameChar_y - 20,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x + 6,
      gameChar_y - 14,
      gameChar_x + 3,
      gameChar_y - 14
    );

    //Calf
    fill(0, 100, 0);
    quad(
      gameChar_x + 3,
      gameChar_y - 14,
      gameChar_x + 6,
      gameChar_y - 14,
      gameChar_x + 6,
      gameChar_y - 8,
      gameChar_x + 3,
      gameChar_y - 8
    );

    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x + 3,
      gameChar_y - 8,
      gameChar_x + 6,
      gameChar_y - 8,
      gameChar_x + 7,
      gameChar_y,
      gameChar_x,
      gameChar_y
    );
  } else if (isRight) {
    // add your walking right code
    // face
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 65, 20);

    // neck
    fill(189, 183, 107);
    rect(gameChar_x - 3, gameChar_y - 56, 5, 5);

    // torso

    fill(0, 0, 139);
    quad(
      gameChar_x - 10,
      gameChar_y - 51,
      gameChar_x + 8,
      gameChar_y - 51,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x - 8,
      gameChar_y - 20
    );

    // Legs

    // Left Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x - 8,
      gameChar_y - 20,
      gameChar_x - 5,
      gameChar_y - 20,
      gameChar_x - 5,
      gameChar_y - 14,
      gameChar_x - 8,
      gameChar_y - 14
    );

    //Calf
    fill(0, 100, 0);
    quad(
      gameChar_x - 8,
      gameChar_y - 14,
      gameChar_x - 5,
      gameChar_y - 14,
      gameChar_x - 5,
      gameChar_y - 8,
      gameChar_x - 8,
      gameChar_y - 8
    );

    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x - 8,
      gameChar_y - 8,
      gameChar_x - 5,
      gameChar_y - 8,
      gameChar_x - 2,
      gameChar_y,
      gameChar_x - 9,
      gameChar_y
    );

    // Right Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x + 3,
      gameChar_y - 20,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x + 8,
      gameChar_y - 13,
      gameChar_x + 5,
      gameChar_y - 13
    );

    //Calf
    fill(0, 100, 0);
    quad(
      gameChar_x + 5,
      gameChar_y - 13,
      gameChar_x + 8,
      gameChar_y - 13,
      gameChar_x + 8,
      gameChar_y - 8,
      gameChar_x + 5,
      gameChar_y - 8
    );

    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x + 5,
      gameChar_y - 8,
      gameChar_x + 8,
      gameChar_y - 8,
      gameChar_x + 11,
      gameChar_y - 1,
      gameChar_x + 4,
      gameChar_y - 1
    );
  } else if (isFalling || isPlummeting) {
    // add your jumping facing forwards code
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 65, 20);

    // neck
    fill(189, 183, 107);
    rect(gameChar_x - 3, gameChar_y - 56, 5, 5);

    // torso

    fill(0, 0, 139);
    quad(
      gameChar_x - 10,
      gameChar_y - 51,
      gameChar_x + 8,
      gameChar_y - 51,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x - 8,
      gameChar_y - 20
    );

    // Legs

    // Left Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x - 8,
      gameChar_y - 25,
      gameChar_x - 5,
      gameChar_y - 25,
      gameChar_x - 5,
      gameChar_y - 19,
      gameChar_x - 8,
      gameChar_y - 19
    );

    // Calf
    fill(0, 100, 0);
    quad(
      gameChar_x - 8,
      gameChar_y - 19,
      gameChar_x - 5,
      gameChar_y - 19,
      gameChar_x - 6,
      gameChar_y - 13,
      gameChar_x - 9,
      gameChar_y - 13
    );

    // Foot
    fill(128, 0, 0);
    quad(
      gameChar_x - 9,
      gameChar_y - 13,
      gameChar_x - 6,
      gameChar_y - 13,
      gameChar_x - 5,
      gameChar_y - 5,
      gameChar_x - 12,
      gameChar_y - 5
    );

    // Right Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x + 3,
      gameChar_y - 25,
      gameChar_x + 6,
      gameChar_y - 25,
      gameChar_x + 6,
      gameChar_y - 19,
      gameChar_x + 3,
      gameChar_y - 19
    );

    // Calf
    fill(0, 100, 0);
    quad(
      gameChar_x + 3,
      gameChar_y - 19,
      gameChar_x + 6,
      gameChar_y - 19,
      gameChar_x + 7,
      gameChar_y - 13,
      gameChar_x + 4,
      gameChar_y - 13
    );

    // Foot
    fill(128, 0, 0);
    quad(
      gameChar_x + 4,
      gameChar_y - 13,
      gameChar_x + 7,
      gameChar_y - 13,
      gameChar_x + 10,
      gameChar_y - 5,
      gameChar_x + 3,
      gameChar_y - 5
    );
  } else {
    // add your standing front facing code
    // face
    fill(222, 184, 135);
    ellipse(gameChar_x, gameChar_y - 65, 20);

    // neck
    fill(189, 183, 107);
    rect(gameChar_x - 3, gameChar_y - 56, 5, 5);

    // torso

    fill(0, 0, 139);
    quad(
      gameChar_x - 10,
      gameChar_y - 51,
      gameChar_x + 8,
      gameChar_y - 51,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x - 8,
      gameChar_y - 20
    );

    // Legs

    // Left Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x - 8,
      gameChar_y - 20,
      gameChar_x - 5,
      gameChar_y - 20,
      gameChar_x - 5,
      gameChar_y - 14,
      gameChar_x - 8,
      gameChar_y - 14
    );

    //Calf
    fill(0, 100, 0);
    quad(
      gameChar_x - 8,
      gameChar_y - 14,
      gameChar_x - 5,
      gameChar_y - 14,
      gameChar_x - 5,
      gameChar_y - 8,
      gameChar_x - 8,
      gameChar_y - 8
    );

    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x - 8,
      gameChar_y - 8,
      gameChar_x - 5,
      gameChar_y - 8,
      gameChar_x - 4,
      gameChar_y,
      gameChar_x - 11,
      gameChar_y
    );
    // Right Side

    // Thigh
    fill(233, 150, 122);
    quad(
      gameChar_x + 3,
      gameChar_y - 20,
      gameChar_x + 6,
      gameChar_y - 20,
      gameChar_x + 6,
      gameChar_y - 14,
      gameChar_x + 3,
      gameChar_y - 14
    );

    //Calf
    fill(0, 100, 0);
    quad(
      gameChar_x + 3,
      gameChar_y - 14,
      gameChar_x + 6,
      gameChar_y - 14,
      gameChar_x + 6,
      gameChar_y - 8,
      gameChar_x + 3,
      gameChar_y - 8
    );

    // Foot

    fill(128, 0, 0);
    quad(
      gameChar_x + 3,
      gameChar_y - 8,
      gameChar_x + 6,
      gameChar_y - 8,
      gameChar_x + 9,
      gameChar_y,
      gameChar_x + 2,
      gameChar_y
    );
  }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here
  if (!isPlummeting) {
    if (isLeft) {
      gameChar_x -= 5;
    }
    if (isRight) {
      gameChar_x += 5;
    }
  }

  if (gameChar_y < floorPos_y) {
    gameChar_y += 2;
    isFalling = true;
  } else {
    isFalling = false;
  }

  // Falling down the canyon
  for (var i = 0; i < canyons.length; i++) {
    checkCanyon(canyons[i]);
  }

  // Make character fall when plummeting
  if (isPlummeting) {
    gameChar_y += 5;
  }
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.
  if ((keyCode == 37 || keyCode == 65) && !isPlummeting) {
    isLeft = true;
  } else if ((keyCode == 39 || keyCode == 83) && !isPlummeting) {
    isRight = true;
  } else if ((keyCode == 32 || keyCode == 87) && !isFalling && !isPlummeting) {
    gameChar_y -= 100;
  }
  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  if (keyCode == 37 || keyCode == 65) {
    isLeft = false;
  } else if (keyCode == 39 || keyCode == 83) {
    isRight = false;
  }

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);
}

function drawClouds() {
  for (var i = 0; i < cloud.x_pos.length; i++) {
    fill(255);
    ellipse(cloud.x_pos[i] + 200, cloud.y_pos, 5 * cloud.size);
    ellipse(cloud.x_pos[i] + 250, cloud.y_pos, 5 * cloud.size);
    ellipse(cloud.x_pos[i] + 300, cloud.y_pos, 4 * cloud.size);
  }
}

function drawMountains() {
  for (var i = 0; i < mountain.x_pos.length; i++) {
    fill(105, 105, 105);
    quad(
      mountain.x_pos[i] + 380,
      mountain.y_pos + 332,
      mountain.x_pos[i] + 480,
      mountain.y_pos + 132,
      mountain.x_pos[i] + 580,
      mountain.y_pos + 132,
      mountain.x_pos[i] + 680,
      mountain.y_pos + 332
    );
    fill(255);
    triangle(
      mountain.x_pos[i] + 480,
      mountain.y_pos + 132,
      mountain.x_pos[i] + 500,
      mountain.y_pos + 102,
      mountain.x_pos[i] + 520,
      mountain.y_pos + 132
    );
    triangle(
      mountain.x_pos[i] + 500,
      mountain.y_pos + 132,
      mountain.x_pos[i] + 530,
      mountain.y_pos + 82,
      mountain.x_pos[i] + 560,
      mountain.y_pos + 132
    );
    triangle(
      mountain.x_pos[i] + 540,
      mountain.y_pos + 132,
      mountain.x_pos[i] + 560,
      mountain.y_pos + 102,
      mountain.x_pos[i] + 580,
      mountain.y_pos + 132
    );
  }
}

function drawTrees() {
  for (var i = 0; i < trees_x.length; i++) {
    fill(165, 42, 42);
    rect(trees_x[i], treePos_y, 20, 145);
    fill(0, 155, 0);
    triangle(
      trees_x[i] - 40,
      treePos_y + 20,
      trees_x[i] + 10,
      treePos_y - 30,
      trees_x[i] + 60,
      treePos_y + 20
    );
    triangle(
      trees_x[i] - 37,
      treePos_y,
      trees_x[i] + 10,
      treePos_y - 60,
      trees_x[i] + 57,
      treePos_y
    );
    triangle(
      trees_x[i] - 32,
      treePos_y - 22,
      trees_x[i] + 10,
      treePos_y - 60,
      trees_x[i] + 52,
      treePos_y - 22
    );
  }
}

function drawCollectable(t_collectable) {
  fill(255, 215, 0);
  ellipse(
    t_collectable.x_pos + 20,
    t_collectable.y_pos,
    t_collectable.size,
    t_collectable.size
  );
}

function checkCollectable(t_collectable) {
  if (
    dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 50
  ) {
    t_collectable.isFound = true;
  }
  if (t_collectable.isFound == false) {
    drawCollectable(t_collectable);
  }
}

function drawCanyon(t_canyon) {
  fill(139, 69, 19);
  rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height - floorPos_y);
}

function checkCanyon(t_canyon) {
  if (
    gameChar_x > t_canyon.x_pos &&
    gameChar_x < t_canyon.x_pos + t_canyon.width &&
    gameChar_y >= floorPos_y
  ) {
    isPlummeting = true;
  }
}
