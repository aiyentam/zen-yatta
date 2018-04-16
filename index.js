var fish = 0;

// happens once
function setup() {
  createCanvas(800, 600);
}

// in a loop
function draw() {
  background(232, 251, 255);

  fill(195, 234, 190);
  // ellipse(fish, mouseY, 100, 100);
  // cone(40, 70);

  // fish = fish + 1;
  flowerOne();
}

// event
function mousePressed() {}

function flowerOne() {
  // flower base
  translate(mouseX, mouseY); // change to mouseX, mouseY
  noStroke();
  fill(177, 214, 185);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 10, 20, 60);
    rotate(PI / 5);
  }

  // flower top
  noStroke();
  fill(248, 224, 234);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 50);
    rotate(PI / 4);
  }

  //flower bud
  fill(246, 252, 164);
  ellipse(0, 0, 15, 15);
}

function flowerTwo() {
  // flowerbase
  translate(200, 200); // change to mouseX, mouseY
  noStroke();
  fill(160, 193, 167);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 10, 20, 60);
    rotate(PI / 5);
  }

  // flower top
  noStroke();
  fill(255, 255, 255);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 50);
    rotate(PI / 4);
  }

  //flower bud
  fill(255, 227, 168);
  ellipse(0, 0, 15, 15);
}

function flowerThree() {
  // flowerbase
  translate(250, 250); // change to mouseX, mouseY
  noStroke();
  fill(175, 221, 184);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 10, 20, 60);
    rotate(PI / 5);
  }

  // flower top
  noStroke();
  fill(129, 146, 203);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 50);
    rotate(PI / 4);
  }

  //flower bud
  fill(255, 227, 168);
  ellipse(0, 0, 15, 15);
}

function flowerFour() {
  // flowerbase
  translate(230, 230); // change to mouseX, mouseY
  noStroke();
  fill(118, 140, 82);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 10, 20, 60);
    rotate(PI / 5);
  }

  // flower top
  noStroke();
  fill(249, 60, 87);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 15, 10, 50);
    rotate(PI / 4);
  }

  //flower bud
  fill(255, 227, 168);
  ellipse(0, 0, 15, 15);
}
