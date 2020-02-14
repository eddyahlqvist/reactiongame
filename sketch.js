// Coded by Eddy Ahlqvist - 2020

let score = 0;
let hit = false;
let projectiles = [];

function setup() {
  createCanvas(800, 600);
  let p = new Projectile(width / 2, height / 2, 25);
  projectiles.push(p);
  // console.log(projectiles)
}

function draw() {
  background(0, 0, 80);
  textSize(32);
  fill(255);
  text("Score: " + score, 10, 35);

  for (let projectile of projectiles) {
    projectile.show();
  }

}

function mousePressed() {
  if (mousePressed) {
    hit = true;
  } else {
    hit = false;
  }

  if (hit == true) {
    score += 10;
  }
}