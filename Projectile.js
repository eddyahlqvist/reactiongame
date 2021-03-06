/* Coded by Eddy Ahlqvist - 2020 */

class Projectile {
  constructor(_x, _y, _dia) {
    this.x = _x;
    this.y = _y;
    this.dia = _dia;
    this.xspeed = random(2, 3);
    this.yspeed = random(-1.5, 1.5);
  }

  bounds() {
    for (let i = projectiles.length - 1; i >= 0; i--) {
      if (this.x >= width || this.y >= height || this.y <= 0) {
        projectiles.splice(i, 1);
      }
    }
  }

  fire() {
    if (fire) {
      this.move();
    }
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.dia, this.dia);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  hitDetect(_x, _y) {
    let d = dist(_x, _y, this.x, this.y);
    return (d < this.dia / 2);
  }

  addScore() {
    currentScore += 10 * scoreMultiplier;
  }

}
