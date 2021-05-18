class Sun {
  constructor(x, y, d, d2) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.d2 = d2;
  }
  drawSun(angles, long) {

    stroke(245, 127, 23, 200);
    strokeWeight(4);
    fill(255, 235, 59);
    circle(this.x, this.y, this.d);

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 40);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 80);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 120);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 160);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 200);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 240);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 280);
    line(this.d / 2, 0, long, 0);
    pop();

    push();
    translate(this.x, this.y);
    strokeWeight(5);
    rotate(angles + 320);
    line(this.d / 2, 0, long, 0);
    pop();

  }
}