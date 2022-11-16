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
/*  
    map and combat will be one canvas
    https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
*/
