// Coded by Eddy Ahlqvist - 2020

class Projectile {
  constructor(_x, _y, _d) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
    this.xspeed = 3;
    this.yspeed = 1;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.d, this.d);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

}