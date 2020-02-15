/* Coded by Eddy Ahlqvist - 2020 */

let currentScore = 0;
let hit = false;
let shots = 1;
let projectiles = [];

function setup() {
  createCanvas(800, 600);
  for (i = 0; i < shots; i++) {
    let p = new Projectile(300, height / 2, random(25, 45));
    projectiles.push(p);
  }
  console.log(projectiles);
  console.log("Easy: " + easy);
  console.log("Normal: " + normal);
  console.log("Hard: " + hard);

}

function draw() {
  background(0, 0, 80);
  textSize(32);
  fill(255);
  text("Score: " + currentScore, 10, 35);

  for (let projectile of projectiles) {
    projectile.show();
    projectile.move();
  }

}

function mousePressed() {
  for (let i = 0; i < projectiles.length; i++) {
    projectiles[i].hitdetect(mouseX, mouseY);
  }
}



// function mousePressed() {
//   if (mousePressed) {
//     hit = true;
//   } else {
//     hit = false;
//   }

//   if (hit == true) {
//     score += 10;
//   }
// }
