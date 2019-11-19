var r, g, b;
var diam1 = 400;

function setup() {
  createCanvas(400, 300);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(r, g, b);
  fill("#037ffc")
  strokeWeight(4);
  line(150, 50, 150, 150);
  line(50, 20, 150 , 50);
  line(240, 50, 240, 150);
  line(355, 20, 240, 50);
  rectMode(CENTER); 
  rect(200, 150, 150, 150);
 
  
}
function mousePressed(){
  r = random(255);
  g = random(255);
  b = random(255); 
  if (diam1 === 400){
    diam1 = 500;
  }
}