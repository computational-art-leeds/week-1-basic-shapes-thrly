// Random squares
// artist
// date
// for FOAH2030: COMPUTATIONAL ART

function setup() {
  createCanvas(400, 500);
  background(255);
  noStroke(); // don't draw outlines for our shapes

// draw randomly
  fill(255, 0, 0);
  let randomSize = 50 + random() * 150; // create a random size;
  rect(width * random(), height * random(), randomSize, randomSize); // draw a rectangle at a random location, with the size defined above.

  randomSize = 50 + random() * 150; // reassign the 'randomSize' variable to a new value
  fill(0, 255, 0);
  rect(width * random(), height * random(), randomSize, randomSize);

  randomSize = 50 + random() * 150;
  fill(255, 0, 255);
  rect(width * random(), height * random(), randomSize, randomSize);

  randomSize = 50 + random() * 150;

  fill(0, 0, 255);
  rect(width * random(), height * random(), randomSize, randomSize);

  // //bonus lines
  for (let i = 0; i < 10; i++) { // we'll make multiple lines, each randomly placed
    push(); // each iteration of the loop will be independent
    translate(width * random(), height * random());
    rotate(TWO_PI * random()); // translate and rotate the position we're going to draw our lines...
    strokeWeight(4);
    stroke(0);
    line(0, 0, 50 + 500 * random(), 0); // random length lines
    pop();
  }
}
