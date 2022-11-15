import Item from "./item.js";

class Blockable extends Item {
  constructor(type, x, y, i, width, height, src) {
    super();
    this.type = type;
    this.x = x;
    this.y = y;
    this.trueX = x * 16;
    this.trueY = y * 16;
    this.i = i;
    this.width = width;
    this.height = height;
    this.src = src;
  }

  remove(block) {
    let i = Blockable.BLOCKLIST.indexOf(block);
    Blockable.BLOCKLIST[i] = null;
    Blockable.BLOCKLIST = Blockable.BLOCKLIST.filter((el) => el !== null);
  }
}

Blockable.BLOCKLIST = [];

export default Blockable;
