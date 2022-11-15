import Game from "./scripts/game.js";
import Item from "./scripts/item.js";
import Inventory from "./scripts/inventory.js";

/* 
    ROADMAP:
        - Render Map
        - Render Player
        - Map Collision
        - Render Enemies
*/

const canvas = document.getElementById("center");
const ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;

const game = new Game(ctx);
game.render();

function animate() {
  window.requestAnimationFrame(animate);
  game.tick();
}
animate();

const item2 = {
  name: "Red Potion",
  src: "./src/assets/items/flask_big_red.png",
};
const item3 = {
  name: "Green Potion",
  src: "./src/assets/items/flask_big_green.png",
};
const item4 = {
  name: "Blue Potion",
  src: "./src/assets/items/flask_big_blue.png",
};
const item5 = {
  name: "Steel Sword",
  src: "./src/assets/items/weapon_sword_steel.png",
};
const item6 = {
  name: "Bomb",
  src: "./src/assets/items/weapon_bomb.png",
};
const item7 = {
  name: "Hammer",
  src: "./src/assets/items/weapon_hammer.png",
};
const item8 = {
  name: "Yellow Potion",
  src: "./src/assets/items/flask_big_yellow.png",
};
// game.playerInventory.addItem(item2, 2);
// game.playerInventory.addItem(item3, 1);
// game.playerInventory.addItem(item4, 3);
// game.playerInventory.addItem(item5, 1);
// game.playerInventory.addItem(item6, 1);
// game.playerInventory.addItem(item7, 4);
// game.playerInventory.addItem(item8, 4);

/*  
    map and combat will be one canvas
    https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
*/
