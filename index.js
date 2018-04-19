var drawnFlowers = [];
// var swimmingfish;

function setup() {
  createCanvas(800, 600);
}

// in a loop
function draw() {
  cursor(HAND);
  background("rgba(221, 251, 255, 0.8)");

  for (var i = 0; i < drawnFlowers.length; i++) {
    push();
    drawnFlowers[i].display();
    pop();
  }
  fish();
}

function mouseClicked(event) {
  var shouldCreate = true;
  var flower = null;
  for (var i = 0; i < drawnFlowers.length; i++) {
    if (drawnFlowers[i].contains(event.clientX, event.clientY)) {
      shouldCreate = false;
      flower = drawnFlowers[i];
      drawnFlowers.splice(i, 1);
      console.log("Flowers in array: ");
      console.log(drawnFlowers);
    }
  }
  if (shouldCreate) {
    console.log("Not clicked. shouldCreate: " + shouldCreate);

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
    console.log("Flowers in array: ");
    console.log(drawnFlowers);
  }
}

// swimmingfish.velocity.x = (mouseX - swimmingfish.position.x) / 10;
// swimmingfish.velocity.y = (mouseY - swimmingfish.position.y) / 10;

// swimmingfish.draw = function() {
//   push();
//   rotate(radians(this.getDirection()));
//   fish(0, 0, 100 + this.getSpeed(), 100 - this.getSpeed());
//   pop();
// };
// swimmingfish.maxSpeed = 10;

// fish();
