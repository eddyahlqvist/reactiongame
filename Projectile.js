/* Coded by Eddy Ahlqvist - 2020 */

class Projectile {
  constructor(_x, _y, _dia) {
    this.x = _x;
    this.y = _y;
    this.dia = _dia;
    this.xspeed = random(2, 3);
    this.yspeed = random(-1.5, 1.5);
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.dia, this.dia);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  hitdetect(_x, _y) {
    let d = dist(_x, _y, this.x, this.y);
    if (d < this.dia / 2) {
      hit = true;
      projectiles.pop();
    } else {
      hit = false;
    }

    if (hit == true) {
      score += 10;
    }
  }

}
