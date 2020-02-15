/* Coded by Eddy Ahlqvist - 2020 */

let currentScore = 0;
let hit = false
let fire = false;
let shots = 10;
let projectiles = [];

function setup() {
  createCanvas(800, 600);
  for (i = 0; i < shots; i++) {
    let p = new Projectile(0, height / 2, random(25, 45));
    projectiles.push(p);
  }
}

function draw() {
  background(0, 0, 80);
  textSize(32);
  fill(255);
  text("Score: " + currentScore, 10, 35);

  for (let projectile of projectiles) {
    projectile.show();
    projectile.fire();
    projectile.bounds();
  }
}

function mousePressed() {
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].hitdetect(mouseX, mouseY);
  }
  fire = true;
  console.log(projectiles);
}
