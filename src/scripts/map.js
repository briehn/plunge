import Player from "./player.js";
import Blockable from "./blockable.js";

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
    this.chestLocations = {};
    this.currentChestCount = 0;
    this.maxChestCount = 12;

    //used for potions
    this.potionLocations = {};
    this.currentPotionCount = 0;
    this.maxPotionCount = 12;

    //blockable list
    this.blockades = {};

    //pulling from local json file that contains data of tile location/name
    this.data = require("../assets/tileSheetData.json").meta.slices;
  }

  generateMap() {
    const tileSheet = new Image();
    tileSheet.src = "./src/assets/tileSheet.png";
    const height = this.ctx.canvas.height;
    const width = this.ctx.canvas.width;

    this.ctx.imageSmoothingEnabled = false;
    tileSheet.onload = () => {
      const tileSize = 16;
      const wall = this.data[55];
      const wallX = wall.keys[0].bounds["x"];
      const wallY = wall.keys[0].bounds["y"];

      const floor = this.data[48];
      const floorX = floor.keys[0].bounds["x"];
      const floorY = floor.keys[0].bounds["y"];

      const chest = this.data[41];
      const chestX = chest.keys[0].bounds["x"];
      const chestY = chest.keys[0].bounds["y"];
      const chestW = chest.keys[0].bounds["w"];
      const chestH = chest.keys[0].bounds["h"];

      const potion = this.data[29];
      const potionX = potion.keys[0].bounds["x"];
      const potionY = potion.keys[0].bounds["y"];
      const potionW = potion.keys[0].bounds["w"];
      const potionH = potion.keys[0].bounds["h"];

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
                chestW,
                chestH,
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
              );
              break;
            case 4:
              this.ctx.drawImage(
                tileSheet,
                potionX,
                potionY,
                potionW,
                potionH,
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
              );
              break;
          }
        }
      }
      this.isColliding(this.game.player, Blockable.BLOCKLIST);
      this.game.player.generatePlayer();
    };
  }

  isColliding(rect1, blocklist) {
    for (let i = 0; i < blocklist.length; i++) {
      let rect2 = blocklist[i];
      //   debugger;
      if (
        // rect1.x < rect2.x + rect2.width &&
        // rect1.x + rect1.width > rect2.x &&
        // rect1.y <= rect2.y + rect2.height &&
        // rect1.height + rect1.y >= rect2.y
        rect1.x + rect1.width >= rect2.x &&
        rect1.x <= rect2.x + rect2.width &&
        rect1.y <= rect2.y + rect2.height &&
        rect1.y + rect1.height >= rect2.y
      ) {
        // debugger;
        console.log("colliding");
        this.game.player.x = this.game.player.prevX;
        this.game.player.y = this.game.player.prevY;
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
          this.currentChestCount += 1;
          let chest = new Blockable("chest", x, y, i, 16, 16);
          Blockable.BLOCKLIST.push(chest);
        } else if (this.isPotion(x, y, i)) {
          let potion = new Blockable("potion", x, y, i, 9, 11);
          Blockable.BLOCKLIST.push(potion);
          this.grid[i] = 4;
          this.currentPotionCount += 1;
          // console.log(this.potionLocations)
        } else {
          this.grid[i] = 0;
        }
      }
    }
  }

  isBoundary(i) {
    return (
      i <= this.rows ||
      i % this.rows === 0 ||
      (i <= this.grid.length - 1 && i > this.grid.length - this.rows) ||
      (i + 1) % this.rows === 0
    );
  }

  isChest(x, y, i) {
    if (this.checkChest(x, y, i)) {
      this.chestLocations[this.currentChestCount] = {
        x: x,
        y: y,
        i: i,
      };
      return true;
    } else {
      return false;
    }
  }

  isPotion(x, y, i) {
    if (this.checkPotion(x, y, i)) {
      this.potionLocations[this.currentPotionCount] = {
        x: x,
        y: y,
        i: i,
      };
      return true;
    } else {
      return false;
    }
  }

  checkPotion(x, y, i) {
    if (Object.keys(this.potionLocations).length === 0) {
      return (
        this.currentPotionCount < this.maxPotionCount && Math.random() > 0.6
      );
    } else {
      return (
        this.currentPotionCount < this.maxPotionCount &&
        Math.random() > 0.6 &&
        !this.withinBoundaries(
          { x: x, y: y, i: i },
          this.potionLocations,
          10,
          10
        )
      );
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
      return this.currentChestCount < this.maxChestCount && Math.random() > 0.7;
    } else {
      return (
        this.currentChestCount < this.maxChestCount &&
        Math.random() > 0.7 &&
        !this.withinBoundaries({ x: x, y: y, i: i }, this.chestLocations, 12, 7)
      );
    }
  }

  withinBoundaries(currentItem, locations, dx, dy) {
    let within = false;
    let cI = currentItem.i;
    Object.values(locations).forEach((coords) => {
      let focus = coords.i;
      let lowestBound = focus - dx - this.rows * dy;
      for (let j = 0; j < dy * 2; j++) {
        let leftBound = lowestBound + j * this.rows;
        let rightBound = leftBound + dx * 2;
        if (cI > leftBound && cI < rightBound) {
          within = true;
        }
      }
    });
    return within;
  }
}

export default Map;
