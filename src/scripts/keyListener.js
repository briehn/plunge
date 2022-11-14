export const KEYS = {
    up: {
        pressed: false
    },
    down: {
        pressed: false
    },
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
}
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case "ArrowUp":
            KEYS.up.pressed = true;
        break;
        case "ArrowDown":
            KEYS.down.pressed = true;
        break;
        case "ArrowLeft":
            KEYS.left.pressed = true;
        break;
        case "ArrowRight":
            KEYS.right.pressed = true;
        break;
    }
})
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case "ArrowUp":
            KEYS.up.pressed = false;
        break;
        case "ArrowDown":
            KEYS.down.pressed = false;
        break;
        case "ArrowLeft":
            KEYS.left.pressed = false;
        break;
        case "ArrowRight":
            KEYS.right.pressed = false;
        break;
    }
})