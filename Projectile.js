// Coded by Eddy Ahlqvist - 2020

class Projectile {
  constructor(_x, _y, _d) {
    this.x = _x;
    this.y = _y;
    this.d = _d;
  }

  show() {
    fill(255);
    ellipse(this.x, this.y, this.d, this.d);
  }

  

}