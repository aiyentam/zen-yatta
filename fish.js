function fish() {
  fill(255, 187, 145);
  stroke(255, 177, 130);

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
