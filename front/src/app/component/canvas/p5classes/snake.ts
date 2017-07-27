export class Snake{

  x = 0;
  y = 0;
  xspeed : number = 1;
  yspeed : number = 0;
  total = 0;
  tail = [];

  constructor(private sketch:any,private blockSize:any){
  }

 eat(pos) {
    let d = this.sketch.dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  dir(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  death() {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = this.sketch.dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total = 0;
        this.tail = [];
        return true;
      }
    }
  }

  update() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = this.sketch.createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * this.blockSize;
    this.y = this.y + this.yspeed * this.blockSize;

    this.x = this.sketch.constrain(this.x, 0, this.sketch.width - this.blockSize);
    this.y = this.sketch.constrain(this.y, 0, this.sketch.height - this.blockSize);
  }

  show() {
    this.sketch.fill(34,139,34);
    for (var i = 0; i < this.tail.length; i++) {
      this.sketch.rect(this.tail[i].x, this.tail[i].y, this.blockSize, this.blockSize);
    }
    this.sketch.rect(this.x, this.y, this.blockSize, this.blockSize);
  }
}
