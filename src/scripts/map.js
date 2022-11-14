import Player from "./player.js"

class Map {
    constructor(ctx) {
        this.ctx = ctx;

        //setting grid info
        this.rows = 32;
        this.cols = 32;
        this.grid = new Array(this.rows * this.cols).fill(0);

        //used for isChest
        this.chestAvailable = true; //obvious
        this.lastChest = 0; //last chest index
        this.currentChestCount = 0;
        this.maxChestCount = 12;

        //pulling from local json file that contains data of tile location/name
        this.data = require('../assets/tileSheetData.json').meta.slices;
    }

    generateMap() {
        const tileSheet = new Image();
        tileSheet.src = "./src/assets/tileSheet.png";
        const height = this.ctx.canvas.height;
        const width = this.ctx.canvas.width;

        tileSheet.onload = () => {
            const tileSize = 16;
            const wall = this.data[55];
            const wallX = wall.keys[0].bounds["x"];
            const wallY = wall.keys[0].bounds["y"];

            const floor = this.data[48]
            const floorX = floor.keys[0].bounds["x"];
            const floorY = floor.keys[0].bounds["y"];

            
            const chest = this.data[41]
            const chestX = chest.keys[0].bounds["x"];
            const chestY = chest.keys[0].bounds["y"];

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
                switch (index) {
                    case 7: 
                        this.ctx.drawImage(
                        tileSheet, 
                        wallX, 
                        wallY, 
                        tileSize, 
                        tileSize, 
                        x * tileSize, 
                        y * tileSize, 
                        tileSize, 
                        tileSize
                        );
                        break;
                    case 0: 
                        this.ctx.drawImage(
                        tileSheet, 
                        floorX, 
                        floorY, 
                        tileSize, 
                        tileSize, 
                        x * tileSize, 
                        y * tileSize, 
                        tileSize, 
                        tileSize
                        );
                        break;
                    case 3:
                        this.ctx.drawImage(
                            tileSheet, 
                            chestX, 
                            chestY, 
                            tileSize, 
                            tileSize, 
                            x * tileSize, 
                            y * tileSize, 
                            tileSize, 
                            tileSize
                        );
                }
            }
           }
           const player = new Player(this.ctx, width / 2, height/2)
           player.generatePlayer();
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
        /*
            7: Boundaries
            0: Floor
            3: Chests
            2: Enemy
            1: Impassable Object
        */
        for (let i = 0; i < this.grid.length; i++) {
            if (this.isBoundary(i)) {
                this.grid[i] = 7;
            } else if (this.isChest(i)) {
                this.grid[i] = 3;
            } 
            else {
                this.grid[i] = 0;
            }
        }
    }

    isBoundary(i) {
        return (i <= this.rows || i % this.rows === 0 || (i <= this.grid.length - 1 && i > this.grid.length - this.rows) || (i + 1) % this.rows === 0);
    }

    isChest(i) {
        if (this.checkChest(i)) {
            debugger
            this.lastChest = i;
            this.currentChestCount += 1;
            return true;
        } else {
            return false;
        }
    }

    checkChest(i) {
        //must fix random generation
        return this.chestAvailable && 
        this.currentChestCount < this.maxChestCount &&
        (Math.random() > .5) &&
        i - this.lastChest > 64
    }
}

export default Map;