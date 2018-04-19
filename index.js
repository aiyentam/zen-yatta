var drawnFlowers = [];
var x, y, m, n, s;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  x = 0;
  y = 0;
  m = 0;
  n = 0;
  s = 1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
  fish();
  fish(translate(550, 550), rotate(radians(frameCount)));
  fish(translate(525, 550), rotate(radians(frameCount)));
  fish(translate(500, 550), rotate(radians(frameCount)));
  fish(translate(475, 550), rotate(radians(frameCount)));
  fish(translate(450, 550), rotate(radians(frameCount)));
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
}
