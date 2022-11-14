import Player from "./player.js"

class Map {
    constructor(ctx, game) {
        this.ctx = ctx;
        this.game = game;

        //setting grid info
        this.rows = 32;
        this.cols = 32;
        this.tsize = 16;
        this.grid = new Array(this.rows * this.cols).fill(0);

        //used for isChest
        this.chestAvailable = true; //obvious
        this.chestLocations = {};
        this.currentChestCount = 0;
        this.maxChestCount = 12;

        //used for potions
        this.potionAvailable = true;
        this.lastPotion = {};
        this.currentPotionCount = 0;
        this.maxPotionCount = 12;

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
                    // debugger
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
           this.game.player.generatePlayer();
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
            4: Potions
            3: Chests
            2: Enemy
            1: Impassable Object
        */
        for (let x = 0; x < this.cols; x++) {
            for (let y = 0; y < this.rows; y++) {
                let i = y * this.cols + x;    
                if (this.isBoundary(i)) {
                    this.grid[i] = 7;
                } else if (this.isChest(x, y, i)) {
                    this.grid[i] = 3;
                } else if (this.isPotion(x,y,i)) {
                    this.grid[i] = 4;
                }
                else {
                    this.grid[i] = 0;
                }
            }
        }
    }

    isBoundary(i) {
        return (i <= this.rows || i % this.rows === 0 || (i <= this.grid.length - 1 && i > this.grid.length - this.rows) || (i + 1) % this.rows === 0);
    }

    isChest(x, y, i) {
        if (this.checkChest(x, y, i)) {
            this.chestLocations[this.currentChestCount] = {
                x: x,
                y: y,
                i, i
            }
            this.currentChestCount += 1;
            // console.log(Object.values(this.chestLocations))
            // console.log(this.chestLocations)
        Object.values(this.chestLocations).forEach((x) => {
            console.log(x.i);
        })
            return true;
        } else {
            return false;
        }
    }

    isPotion(x, y, i) {
        if (Object.keys(this.lastPotion).length === 0) {
            this.lastPotion["x"] = x;
            this.lastPotion["y"] = y;
            this.lastPotion["i"] = i;
        }

    }

    checkChest(x, y, i) {
        /* 
            must fix random generation
            check for player spawn location
            why no top right?
            very left side heavy
        */
        if (Object.keys(this.chestLocations).length === 0) {
            return this.chestAvailable && 
            this.currentChestCount < this.maxChestCount &&
            (Math.random() > .7)
        } else {
            return this.chestAvailable && 
            this.currentChestCount < this.maxChestCount && (Math.random() > .7)
            && (Math.random() > .7)
            && !this.withinBoundaries({x: x, y: y, i: i})
        }
    }

    withinBoundaries(currentChest) {
        let within = false;
        let cI = currentChest.i
        Object.values(this.chestLocations).forEach((coords) => {
            let focus = coords.i
            if (cI > ((focus - (this.rows * 2)) - 3) && cI < ((focus + (this.rows * 2)) + 3)) {
                within = true;
            }
        })
        return within;
    }

}

export default Map;