import Map from "./map.js";

class Game {
    constructor(ctx) {
        this.ctx = ctx;
    }

    render() {
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.stroke();
        
        const map = new Map(this.ctx);
        map.createGrid();
        map.generateMap();

        
    }
}

export default Game;