var drawnFlowers = [];
var a, b, c, d, x, y, m, n, s;
var blop;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  a = 1;
  b = 2;
  c = 3;
  d = 4;
  x = 0;
  y = 0;
  m = 0;
  n = 0;
  s = 1;
}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}

// in a loop
function draw() {
  cursor(HAND);
  background("rgba(221, 251, 255, 0.8)");

  for (var i = 0; i < drawnFlowers.length; i++) {
    push();
    x = x + random(-0.25, 0.25);
    y = y + random(-0.25, 0.25);
    translate(x, y);
    drawnFlowers[i].display();
    pop();
  }

  push();
  m = m + random(1, 0) * s;
  n = n + random(0, -1) * s;
  translate(m, n);
  fish(-250, 200, rotate(radians(frameCount)));
  pop();

  push();
  s = random(1) * 3;
  a = a + random(1, 0) * s;
  b = b + random(0, -1) * s;
  translate(a, b);
  fish(-300, 250, rotate(radians(frameCount)));
  pop();

  push();
  s = random(1) * 2;
  c = c + random(1, 0) * s;
  d = d + random(0, -1) * s;
  translate(c, d);
  fish(-400, 350, rotate(radians(frameCount)));
  pop();

  push();
  s = random(1) * -2;
  m = m + random(1, 0) * s;
  n = n + random(0, -1) * s;
  translate(m, n);
  fish(-700, 650, rotate(radians(frameCount)));
  pop();

  push();
  s = random(1) * 3;
  a = a + random(1, 0) * s;
  b = b + random(0, -1) * s;
  translate(a, b);
  fish(-800, 750, rotate(radians(frameCount)));
  pop();

  push();
  c = c + random(1, 0) * s;
  d = d + random(0, -1) * s;
  translate(c, d);
  fish(-300, 650, rotate(radians(frameCount)));
  pop();

  push();
  m = m + random(1, 0) * s;
  n = n + random(0, -1) * s;
  translate(m, n);
  fish(-700, 250, rotate(radians(frameCount)));
  pop();

  push();
  c = c + random(1, 0) * s;
  d = d + random(0, -1) * s;
  translate(c, d);
  fish(-800, 150);
  pop();

  if (m < -200) {
    m = -200;
    s = random(-1, 1);
  } else if (m > 200) {
    m = -200;
    s = random(-1, 1);
  } else if (n < 0) {
    n = 0;
    s = random(-1, 1);
  } else if (n > 800) {
    n = 0;
    s = random(-1, 1);
  } else if (a < -200) {
    m = -200;
    s = random(-1, 1);
  } else if (a > 200) {
    a = -200;
    s = random(-1, 1);
  } else if (b < 0) {
    b = 0;
    s = random(-1, 1);
  } else if (b > 800) {
    b = 0;
    s = random(-1, 1);
  } else if (c < -200) {
    c = -200;
    s = random(-1, 1);
  } else if (c > 200) {
    c = -200;
    s = random(-1, 1);
  } else if (d < 0) {
    d = 0;
    s = random(-1, 1);
  } else if (d > 800) {
    d = 0;
    s = random(-1, 1);
  }
}

function mouseClicked(event) {
  var shouldCreate = true;
  var flower = null;
  for (var i = 0; i < drawnFlowers.length; i++) {
    if (drawnFlowers[i].contains(event.clientX, event.clientY)) {
      shouldCreate = false;
      flower = drawnFlowers[i];
      drawnFlowers.splice(i, 1);
    }
  }
  if (shouldCreate) {
    var color1 = random(255);
    var color2 = random(255);
    var color3 = random(255);
    flower = new Flower(
      event.clientX,
      event.clientY,
      color1,
      color2,
      color3,
      drawnFlowers.length - 1
    );
    drawnFlowers.push(flower);
    redraw();
  }
  blop.play();
}
