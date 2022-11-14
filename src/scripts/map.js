class Map {
    constructor(ctx) {
        this.ctx = ctx;

        //setting grid info
        this.rows = 32;
        this.cols = 32;
        this.grid = new Array(this.rows * this.cols).fill(0);

        //pulling from local json file that contains data of tile location/name
        this.data = require('../assets/tileSheetData.json').meta.slices;
    }

    generateMap() {
        const tileSheet = new Image();
        tileSheet.src = "./src/assets/tileSheet.png";

        tileSheet.onload = () => {
            const wall = this.data[55];
            const wallX = wall.keys[0].bounds["x"];
            const wallY = wall.keys[0].bounds["y"];
            const wallSize = 16;

            const floor = this.data[48]
            const floorX = floor.keys[0].bounds["x"];
            const floorY = floor.keys[0].bounds["y"];
            const floorSize = 16;

            /*
            drawImage(
                image,
                cropStartX,
                cropStarTy, 
                cropWidth,
                cropHeight, 
                drawX, 
                drawY, 
                drawWidth, 
                drawHeight
                );
            */

           for (let x = 0; x < this.cols; x++) {
            for (let y = 0; y < this.rows; y++) {
                let i = y * this.cols + x;
                let index = this.grid[i];
                if (index === 7) {
                    this.ctx.drawImage(tileSheet, wallX, wallY, wallSize, wallSize, x * wallSize, y * wallSize, wallSize, wallSize);
                } else if (index == 0) {
                    this.ctx.drawImage(tileSheet, floorX, floorY, floorSize, floorSize, x * floorSize, y * floorSize, floorSize, floorSize);
                }
            }
           }
        }
    }
/*
        EXAMPLE GRID
        WALLS = 

        
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
        12,                             , 23
        24,                             , 35
        36,                             , 47
        48,


        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7,
        7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7
 */
    createGrid() {
        for (let i = 0; i < this.grid.length; i++) {
            if (this.isBoundary(i)) {
                this.grid[i] = 7;
            } else {
                this.grid[i] = 0;
            }
        }
    }

    isBoundary(i) {
        return (i <= this.rows || i % this.rows === 0 || (i <= this.grid.length - 1 && i > this.grid.length - this.rows) || (i + 1) % this.rows === 0);
    }
}

export default Map;