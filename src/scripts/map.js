class Map {
    constructor(ctx) {
        this.ctx = ctx;

        //setting grid info
        this.rows = 12;
        this.cols = 12;
        this.grid = new Array(this.rows * this.cols).fill(0);
        console.log(this.grid);

        //pulling from local json file that contains data of tile location/name
        this.data = require('../assets/tileSheetData.json').meta.slices;
    }

    generateMap() {
        const tileSheet = new Image();
        tileSheet.src = "./src/assets/tileSheet.png";

        tileSheet.onload = () => {
            const floor = this.data[48];
            // this.ctx.drawImage(tileSheet, 0, 0)
            this.ctx.drawImage(tileSheet, floor.keys[0].bounds["x"], floor.keys[0].bounds["y"], 16, 16, 0, 0, 16, 16);
        }
    }
/*
        EXAMPLE GRID
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
        const grid = [];
        for (let x = 0; x < this.cols; ix++) {
            for (let y = 0 ; y < this.rows; y++) {
                let index = grid[y * this.cols + x]; //coordinate math


            }
        }

        return grid;
    }
}

export default Map;