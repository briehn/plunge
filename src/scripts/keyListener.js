const KeyListener = {};
KeyListener.listen = function () {
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.KEYS["up"].pressed = true;
        break;
      case "ArrowDown":
        e.preventDefault();
        this.KEYS["down"].pressed = true;
        break;
      case "ArrowLeft":
        e.preventDefault();
        this.KEYS["left"].pressed = true;
        break;
      case "ArrowRight":
        e.preventDefault();
        this.KEYS["right"].pressed = true;
        break;
    }
  });

  window.addEventListener("keyup", (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        this.KEYS["up"].pressed = false;
        break;
      case "ArrowDown":
        e.preventDefault();
        this.KEYS["down"].pressed = false;
        break;
      case "ArrowLeft":
        e.preventDefault();
        this.KEYS["left"].pressed = false;
        break;
      case "ArrowRight":
        e.preventDefault();
        this.KEYS["right"].pressed = false;
        break;
    }
  });
};

KeyListener.isDown = function (key) {
  //   console.log(this.KEYS);
  return this.KEYS[key].pressed;
};

KeyListener.KEYS = {
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  right: {
    pressed: false,
  },
};

export default KeyListener;
