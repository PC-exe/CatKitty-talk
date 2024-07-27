//let x;
//let y;
//let col;

class Animal {
  constructor(
    v = "dinga laka laka",
    x = width / 2,
    y = height / 2,
    col = "yellow"
  ) {
    this.voice = v;
    this.locX = x;
    this.locY = y;
    this.col = col;

    //this.v = voice;
  }
  talk() {
    // console.log(this.voice);
    text(this.voice, width / 2, height / 2);
  }
  showUp() {
    stroke(this.col);
    strokeWeight(20);
    point(this.locX, this.locY);
  }
}
