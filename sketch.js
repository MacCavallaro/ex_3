let x, y;
let lebron;
let gridSize = 40;
let moveSpeed = 10;
let activeKey = null; 
let mode = 0;
let font;
let stars;
let nuke;
let gold;
let golds = [];
let crowd;
let ocean; 
let b;
let cy = 0;
let backgrounds = [];
let bgIndex = 0;

function preload() {
  lebron = loadImage('FACE.png');
  stars = loadImage('stars.webp');
  nuke = loadImage('nuke.gif');
  gold = loadImage('gold.png');
  font = loadFont('future.otf');
  ocean = loadImage('ocean.webp');
  crowd = loadImage('crowd.jpeg');
  backgrounds = [stars, ocean, crowd]; 
}

function setup() {
  createCanvas(1000, 500);
  x = 480;
  y = height / 2;
  rectMode(CENTER);
  textAlign(CENTER);
  textFont(font);
  b = backgrounds[bgIndex]; 
}

function draw() {
  clear();
  background(b);


//---------------------Start Screen------------------------------
  if (mode == 0) {
    textFont(font);
    fill(255);
    textSize(20);
    text('PRESS ENTER TO START', width / 2, 300);
  }



//--------------------GAME CODE-------------------------------

//Barriers----------------
  if (activeKey) {
    keyChoice(activeKey);
  }
  if (x < 0) x = width;
  if (x > width) x = 0;
  if (y < 0) y = height;
  if (y > height) y = 0;

//buttons and text--------
  if (mode == 1) {
    image(lebron, x, y, gridSize, gridSize);
    textAlign(CENTER);

    fill(255);
    rect(width / 2, 400, 100, 50);
    textSize(10);
    fill(0);
    text('NUKE', width / 2, 400);
    
    fill('red');
    textSize(60);
    text('PUSH THE BUTTON', width / 2, cy);
    cy += 0.05;

  
//gold poops--------------------------------------
    for (let i = 0; i < golds.length; i++) {
      image(gold, golds[i].x, golds[i].y, 50, 50);
    }
//NUKE-----------------------------------------
    if (mouseIsPressed && mouseX > 450 && mouseX < 550 && mouseY > 375 && mouseY < 425) {
      image(nuke, 0, 0, width, height);
      console.log('GAME RESTART');
    }
  }
}

//-----------------------KEY FUNCTIONS-------------------------------
function keyPressed() {
  activeKey = key; 
  if (keyCode === ENTER) { //ENTER for start
    mode = 1;
    console.log('GAME HAS STARTED');
  }
  if (key === 'p') { //P for golden poops
    golds.push({ x: x, y: y });
  }
  if (key === '1') { //1 for background Toggle
    bgIndex = (bgIndex + 1) % backgrounds.length; 
    b = backgrounds[bgIndex];
  }
}

//MOVEMENT CONTROLS --------------------
function keyChoice(currentKey) {
  switch (currentKey) {
    case 'a':
      x -= moveSpeed;
      console.log('Character moving left');
      break;
    case 'd':
      x += moveSpeed;
      console.log('Character moving right');
      break;
    case 'w':
      y -= moveSpeed;
      console.log('Character is moving up');
      break;
    case 's':
      y += moveSpeed;
      console.log('Character is moving down');
      break;
  }
}
