import Map from "./map.js";
import Player from "./player.js"

class Game {
    constructor(ctx) {
        this.ctx = ctx;
    }

    render() {
        const height = this.ctx.canvas.height;
        const width = this.ctx.canvas.width;
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "black";
        this.ctx.fillRect(0, 0, width, height);
        this.ctx.stroke();
        
        const map = new Map(this.ctx);
        map.createGrid();
        map.generateMap();
    }
}

export default Game;