class Player {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.player = require('../assets/tileSheetData.json').meta.slices[150];
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
}

export default Player;