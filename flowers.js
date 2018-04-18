var flowers = [flowerOne, flowerTwo, flowerThree, flowerFour];

function flowerOne(locationX, locationY) {
  // flower base
  translate(locationX, locationY);
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

function flowerTwo(locationX, locationY) {
  // flowerbase
  translate(locationX, locationY);
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

function flowerThree(locationX, locationY) {
  // flowerbase
  translate(locationX, locationY);
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

function flowerFour(locationX, locationY) {
  // flowerbase
  translate(locationX, locationY);
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

class Flower {
  constructor(locationX, locationY, randomInteger) {
    this.locationX = locationX;
    this.locationY = locationY;
    this.randomInteger = randomInteger;
  }

  display() {
    flowers[this.randomInteger](this.locationX, this.locationY);
  }
}
