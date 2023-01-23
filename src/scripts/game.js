import Map from "./map.js";
import Player from "./player.js";
import KeyListener from "./keyListener.js";
import Inventory from "./inventory.js";

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.map = new Map(this.ctx, this);
    this.player = new Player(
      this.map,
      this.ctx,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );
    this.playerInventory = new Inventory();
    this._previousElaped = 0;
    this.initialRender = false;
  }

  render() {
    if (!this.initialRender) {
      this.initialRender = true;
      this.map.createGrid();
    }
    KeyListener.listen();
    this.map.generateMap();
    this.player.generatePlayer();
  }

  update() {
    let dirx = 0;
    let diry = 0;
    if (KeyListener.isDown("up")) {
      diry = -1;
    } else if (KeyListener.isDown("down")) {
      diry = 1;
    } else if (KeyListener.isDown("left")) {
      dirx = -1;
    } else if (KeyListener.isDown("right")) {
      dirx = 1;
    }
    this.player.getPrevCoords();
    this.player.move(dirx, diry);
  }

  tick(elapsed) {
    var delay = (elapsed - this._previousElapsed) / 1000.0;
    delay = Math.min(delay, 0.25);
    this._previousElapsed = elapsed;

    this.update();
    this.render();
  }
}

export default Game;
