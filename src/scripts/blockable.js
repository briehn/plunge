class Blockable {
  constructor(type, x, y, i, width, height) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.i = i;
    this.width = width;
    this.height = height;
  }
}

Blockable.BLOCKLIST = [];

export default Blockable;
