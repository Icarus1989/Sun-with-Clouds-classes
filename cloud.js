class Cloud {
  constructor(x, y, d, b) {
    this.d = d;
    this.x = x;
    this.y = y;
    this.b = b + d;
  }
  drawCloud() {
    noStroke();
    fill(0, 0, 0, 50);
    circle(this.x, this.y, this.b);
    circle(this.x + (this.b / 2), this.y, this.b);
    circle(this.x + (this.b), this.y, this.b);
    circle(this.x + (this.b / 3), this.y - (this.b / 3), this.b);
    circle(this.x + (this.b / 1.2), this.y - (this.b / 3), this.b);

    fill(255, 255, 255);
    circle(this.x, this.y, this.d);
    circle(this.x + (this.d / 2), this.y, this.d);
    circle(this.x + (this.d), this.y, this.d);
    circle(this.x + (this.d / 3), this.y - (this.d / 3), this.d);
    circle(this.x + (this.d / 1.2), this.y - (this.d / 3), this.d);
  }
  move() {
    this.x = this.x + 1;
  }
}