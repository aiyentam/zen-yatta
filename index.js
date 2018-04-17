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
  fish();
}

// event
function mousePressed() {}

function fish() {
  fill(252, 152, 90);
  noStroke();

  //head
  push();
  translate(250, 255);
  beginShape();

  curveVertex(0, 0);
  curveVertex(1.25, 0);
  curveVertex(3.05, 0.49);
  curveVertex(4.71, 2.54);
  curveVertex(13.14, 22.26);
  curveVertex(4.5, 30.17);
  curveVertex(-4.5, 30.17);
  curveVertex(-13.14, 22.26);
  curveVertex(-4.71, 2.54);
  curveVertex(-3.05, 0.49);
  curveVertex(-1.25, 0);
  curveVertex(0, 0);

  endShape();
  pop();

  //eyes
  push();
  translate(250, 275);
  fill(0, 0, 0);
  ellipse(5, -2, 5, 5);
  ellipse(-5, -2, -5, -5);
  pop();

  //body
  push();
  translate(250, 268);
  noStroke();

  ellipse(0, 38, 23, 50);
  pop();

  //tail fin
  push();
  translate(250, 195);

  beginShape();

  curveVertex(0, 125);
  curveVertex(0.5, 120.0);
  curveVertex(4.95, 150.39);
  curveVertex(0.56, 144.03);
  curveVertex(0, 143.45);
  curveVertex(-0.56, 144.03);
  curveVertex(-4.95, 150.39);
  curveVertex(-0.5, 120.0);
  curveVertex(0, 125);

  endShape();
  pop();

  //fins
  push();
  translate(250, 255);
  triangle(10, 30, 30, 34, 20, 45);

  triangle(-10, 30, -30, 34, -20, 45);

  pop();
}

function flowerOne() {
  // flower base
  translate(mouseX, mouseY);
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
