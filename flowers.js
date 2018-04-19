class Flower {
  constructor(locationX, locationY, color1, color2, color3) {
    this.locationX = locationX;
    this.locationY = locationY;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;
  }

  display() {
    translate(this.locationX, this.locationY);
    noStroke();
    fill(177, 214, 185);
    for (var i = 0; i < 10; i++) {
      ellipse(0, 10, 20, 60);
      rotate(PI / 5);
    }

    noStroke();
    fill(this.color1, this.color2, this.color3);
    for (var i = 0; i < 10; i++) {
      ellipse(0, 15, 10, 50);
      rotate(PI / 4);
    }

    fill(246, 252, 164);
    ellipse(0, 0, 15, 15);
  }

  contains(mouseLocationX, mouseLocationY) {
    var diameter = dist(
      mouseLocationX,
      mouseLocationY,
      this.locationX,
      this.locationY
    );
    if (diameter < 60) {
      return true;
    } else {
      return false;
    }
  }
}
