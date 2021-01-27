class Bird {
  constructor(x, y) {
    var options = {
      restitution: 1.2,
    };
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(myWorld, this.body);
  }

  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;

    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red");
    rect(0, 0, 50, 50);
    pop();
  }
}
