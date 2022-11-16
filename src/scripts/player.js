import Blockable from "./blockable";

class Player {
  constructor(map, ctx, x, y) {
    this.map = map;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.prevX = null;
    this.prevY = null;
    this.height = 32;
    this.width = 16;
    this.player = require("../assets/tileSheetData.json").meta.slices[150];
    Player.SPEED = 2;
  }

  generatePlayer() {
    const tileSheet = new Image();
    tileSheet.src = "./src/assets/tileSheet.png";

    tileSheet.onload = () => {
      const spriteX = this.player.keys[0].bounds["x"];
      const spriteY = this.player.keys[0].bounds["y"];
      const playerSize = 16;

      this.ctx.drawImage(
        tileSheet,
        spriteX,
        spriteY,
        playerSize,
        playerSize,
        this.x,
        this.y,
        this.height,
        this.height
      );
    };
  }

  move(dirx, diry) {
    this.x += dirx * Player.SPEED;
    this.y += diry * Player.SPEED;

    var maxX = this.map.cols * this.map.tsize - this.height * 2;
    var maxY = this.map.rows * this.map.tsize - this.height * 2;

    if (this.map.isColliding(this, Blockable.BLOCKLIST)) {
      this.x = this.prevX;
      this.y = this.prevY;
    } else {
      this.y = Math.max(16, Math.min(this.y, maxY));
      this.x = Math.max(16, Math.min(this.x, maxX));
    }

  }

  getPrevCoords() {
    this.prevX = this.x;
    this.prevY = this.y;
  }
}

export default Player;
