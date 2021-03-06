/* Coded by Eddy Ahlqvist - 2020 */

let projectiles = [];
let currentScore = 0;
let fire = false;
let shots = 10;

function setup() {
  createCanvas(800, 600);
  setDifficulty(2);
  for (i = 0; i < shots; i++) {
    let p = new Projectile(0, height / 2, random(25, 45));
    projectiles.push(p);
  }
}

function mousePressed() {
  for (let i = projectiles.length - 1; i >= 0; i--) {
    if (projectiles[i].hitDetect(mouseX, mouseY)) {
      projectiles[i].addScore();
      projectiles.splice(i, 1);
    }
  }
  fire = true; //tmp
  console.log(projectiles);
}

function draw() {
  background(0, 0, 80);
  textSize(32);
  fill(255);
  text("Score: " + currentScore, 10, 35);

  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].hitDetect(mouseX, mouseY);
    projectiles[i].show();
    projectiles[i].fire();
    projectiles[i].bounds();
  }
  // projectiles[0].hitDetect(mouseX, mouseY);
  // projectiles[0].show();
  // projectiles[0].fire();
  // projectiles[0].bounds();
}
