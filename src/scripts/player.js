class Player {
    constructor(map, ctx, x, y) {
        this.map = map;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.player = require('../assets/tileSheetData.json').meta.slices[150];
        Player.SPEED = 16;
    }


    generatePlayer() {
        // const wall = this.data[55];
        // const wallX = wall.keys[0].bounds["x"];
        // const wallY = wall.keys[0].bounds["y"];
        // const wallSize = 16;
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
                playerSize, 
                playerSize
                );
        }
    }

    move(dirx, diry) {
        this.x += dirx * Player.SPEED;
        this.y += diry * Player.SPEED;

        var maxX = this.map.cols * this.map.tsize;
        var maxY = this.map.rows * this.map.tsize;
        this.x = Math.max(0, Math.min(this.x, maxX));
        this.y = Math.max(0, Math.min(this.y, maxY));
        
    }
}

export default Player;