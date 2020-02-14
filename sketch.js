// Coded by Eddy Ahlqvist - 2020

let score = 0;
let hit = false;
let projectiles = [];

function setup() {
  createCanvas(800, 600);
  for (i = 0; i < 5; i++) {
    let p = new Projectile(0, height / 2, 25);
    projectiles.push(p);
  }
  console.log(projectiles)
}

function draw() {
  background(0, 0, 80);
  textSize(32);
  fill(255);
  text("Score: " + score, 10, 35);

  for (let projectile of projectiles) {
    projectile.show();
    projectile.move();
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