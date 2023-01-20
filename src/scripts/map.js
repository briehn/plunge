import Player from "./player.js";
import Blockable from "./blockable.js";
import Item from "./item.js";

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

    //used for enemies
    this.enemyLocations = {};
    this.currentEnemyCount = 0;
    this.maxEnemyCount = 24;

    //blockable list
    this.blockades = Blockable.BLOCKLIST;
    this.previousCollision = null;

    //pulling from local json file that contains data of tile location/name
    this.data = require("../assets/tileSheetData.json").meta.slices;

    this.wall = this.data[55];
    this.floor = this.data[48];
    this.chest = this.data[41];
    this.potion = this.data[29];
    this.bat = this.data[107];
  }

  generateMap() {
    const tileSheet = new Image();
    tileSheet.src = "./src/assets/tileSheet.png";
    const height = this.ctx.canvas.height;
    const width = this.ctx.canvas.width;

    this.ctx.imageSmoothingEnabled = false;
    tileSheet.onload = () => {
      this.game.player.generatePlayer();
      const tileSize = 16;
      // const wall = this.data[55];
      const wallX = this.wall.keys[0].bounds["x"];
      const wallY = this.wall.keys[0].bounds["y"];

      // const floor = this.data[48];
      const floorX = this.floor.keys[0].bounds["x"];
      const floorY = this.floor.keys[0].bounds["y"];

      // const chest = this.data[41];
      const chestX = this.chest.keys[0].bounds["x"];
      const chestY = this.chest.keys[0].bounds["y"];
      const chestW = this.chest.keys[0].bounds["w"];
      const chestH = this.chest.keys[0].bounds["h"];

      // const potion = this.data[29];
      const potionX = this.potion.keys[0].bounds["x"];
      const potionY = this.potion.keys[0].bounds["y"];
      const potionW = this.potion.keys[0].bounds["w"];
      const potionH = this.potion.keys[0].bounds["h"];

      // const bat = this.data[107];
      const batX = this.bat.keys[0].bounds["x"];
      const batY = this.bat.keys[0].bounds["y"];
      const batW = this.bat.keys[0].bounds["w"];
      const batH = this.bat.keys[0].bounds["h"];

      /*
            drawImage(
                image,
                cropStartX,
                cropStartY, 
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
        }
      }

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
            case 2:
              this.ctx.drawImage(
                tileSheet,
                batX,
                batY,
                batW,
                batH,
                x * tileSize,
                y * tileSize,
                tileSize,
                tileSize
              );
              break;
          }
        }
      }
      // this.game.player.generatePlayer();
    };
  }

  isColliding(rect1, blocklist) {
    for (let i = 0; i < blocklist.length; i++) {
      let rect2 = blocklist[i];
      if (
        rect1.x + rect1.width + 5 >= rect2.trueX - rect2.x / 2 && //right of player, left of block
        rect1.x <= rect2.trueX + rect2.width - rect2.x / 2 && //right of block, left of player
        rect1.y <= rect2.trueY + rect2.height && //top of player, bottom of block
        rect1.y + rect1.height >= rect2.trueY //top of block, bottom of player
      ) {
        // debugger;
        window.addEventListener("keydown", (e) => {
          if (e.key === "e" && this.previousCollision === rect2) {
            if (rect2.type !== "enemy") {
              rect2.remove();
              this.pickupItem(rect2);
            }
            // debugger;
          }
        });
        this.previousCollision = rect2;
        return true;
      }
    }
  }

  pickupItem(item) {
    if (item.type !== "enemy") {
      this.grid[item.i] = 0;
      const temp = new Item();
      if (item.type === "chest") {
        if (!item.interacted) {
          item.interacted = true;
          let reward = temp.generateChestReward();
          // debugger;
          this.game.playerInventory.addItem(reward, 1);
        }
      } else {
        // debugger;
        if (!item.interacted) {
          item.interacted = true;
          if (item.type === "redPot")
            this.game.playerInventory.addItem(Item.ITEMS[0], 1);
        }
      }
    }
  }
  /*
        EXAMPLE GRID
        WALLS = 

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
          let potion = new Blockable(
            "redPot",
            x,
            y,
            i,
            9,
            11,
            "./src/assets/items/flask_big_red.png"
          );
          Blockable.BLOCKLIST.push(potion);
          this.grid[i] = 4;
          this.currentPotionCount += 1;
        } else if (this.isEnemy(x, y, i)) {
          let enemy = new Blockable(
            "enemy",
            x,
            y,
            i,
            16,
            16,
            "./src/assets/items/monster_bat.png"
          );
          Blockable.BLOCKLIST.push(enemy);
          this.grid[i] = 2;
          this.currentEnemyCount += 1;
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

  isEnemy(x, y, i) {
    if (this.checkEnemy(x, y, i)) {
      this.enemyLocations[this.currentEnemyCount] = {
        x: x,
        y: y,
        i: i,
      };
      return true;
    } else {
      return false;
    }
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
  checkEnemy(x, y, i) {
    if (Object.keys(this.enemyLocations).length === 0) {
      return this.currentEnemyCount < this.maxEnemyCount && Math.random() > 0.5;
    } else {
      return (
        this.currentEnemyCount < this.maxEnemyCount &&
        Math.random() > 0.5 &&
        !this.withinBoundaries({ x: x, y: y, i: i }, this.enemyLocations, 6, 6)
      );
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

  /*
            0
           000
          00000
        0000P0000  p => focus point
          00000 
           000
            0
    */

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
