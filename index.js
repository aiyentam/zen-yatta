var drawnFlowers = [];

function setup() {
  createCanvas(800, 600);
  background("rgba(221, 251, 255, 0.8)");
}

// in a loop
function draw() {}

function mouseClicked(event) {
  // var flowers = random([flowerOne, flowerTwo, flowerThree, flowerFour]);
  // flowers(event.clientX, event.clientY);
  var flower = new Flower(
    event.clientX,
    event.clientY,
    Math.floor(Math.random() * 4)
  );
  drawnFlowers.push(flower);
  flower.display();
  console.log(drawnFlowers);
}
