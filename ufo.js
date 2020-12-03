const ufoPick = new Image();
ufoPick.src = "ufo1.png";

class Ufo {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.z = 0;
    this.originalWidth = 800;
    this.originalHeight = 750;
    this.width = this.originalWidth / 20;
    this.height = this.originalHeight / 20;
    this.weight = 1;
  }
  update() {
    let curve = Math.sin(angle) * 15;
    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
      this.z = 0;
    } else {
      this.z += this.weight;
      this.z *= 0.9;
      this.y += this.z;
    }
    if (this.y < this.height) {
      this.y = this.height;
      this.z = 0;
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
  }
  draw() {
    cvn.drawImage(
      ufoPick,
      0,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x,
      this.y,
      this.width*1.6,
      this.height*1.6
    );
  }
  flap() {
    this.z -= 2;
  }
}
const ufo = new Ufo();
