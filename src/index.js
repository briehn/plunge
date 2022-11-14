import Example from "./scripts/example";
import Game from "./scripts/game";

/* 
    ROADMAP:
        - Render Map
        - Render Player
        - Map Collision
        - Render Enemies
*/

const game = new Game("main");
const canvas = document.getElementById("center");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;

const playerImage = new Image();
playerImage.src = "./assets/player.png";

ctx.fillStyle = "black";
ctx.strokeStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.stroke();

// PLAYER MODEL CODE DISABLE UNTIL MAP IS RENDERED
// class Sprite {
//     constructor(options) {
//         this.position = options.position
//     }
// }

// const keys = {
//     up: {
//         pressed: false
//     },
//     down: {
//         pressed: false
//     },
//     left: {
//         pressed: false
//     },
//     right: {
//         pressed: false
//     }
// }
// playerImage.onload = () => {
//     ctx.drawImage(
//         playerImage,
//         0,
//         0,
//         playerImage.width / 17,
//         playerImage.height,
//         5,
//         canvas.height - playerImage.height,
//         playerImage.width / 17,
//         playerImage.height
//         );
// }

// function animate() {
//     window.requestAnimationFrame(animate)
// }
// animate();

// window.addEventListener('keydown', (e) => {
//     switch (e.key) {
//         case "ArrowUp":
//             keys.up.pressed = true;
//         break;
//         case "ArrowDown":
//             keys.down.pressed = true;
//         break;
//         case "ArrowLeft":
//             keys.left.pressed = true;
//         break;
//         case "ArrowRight":
//             keys.right.pressed = true;
//         break;
//     }
// })
// window.addEventListener('keyup', (e) => {
//     switch (e.key) {
//         case "ArrowUp":
//             keys.up.pressed = false;
//         break;
//         case "ArrowDown":
//             keys.down.pressed = false;
//         break;
//         case "ArrowLeft":
//             keys.left.pressed = false;
//         break;
//         case "ArrowRight":
//             keys.right.pressed = false;
//         break;
//     }
// })

/*  
    map and combat will be one canvas
    https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
*/
