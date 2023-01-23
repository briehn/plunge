class Item {
  constructor(inventory, name, desc, count = 1, src, action = null) {
    this.inventory = inventory;
    this.name = name;
    this.desc = desc;
    this.count = count;
    this.src = src;
    this.action = action;
    this.pickedUp = false;
  }

  useItem() {
    if (this.action) {
      this.action();
    }
  }

  generateChestReward() {
    let length = Object.keys(Item.ITEMS).length - 1;
    let rand = Math.floor(Math.random() * length);
    return Item.ITEMS[rand];
  }
}

Item.findById = (id) => {
  let itemLength = Object.values(Item.ITEMS).length;
  for (let i = 0; i < itemLength; i++) {
    if (id === Item.ITEMS[i].id) {
      return Item.ITEMS[i];
    }
  }
};
//TODO: Add actions/functions
Item.ITEMS = {
  0: {
    id: "redPot",
    name: "Red Potion",
    desc: "A simple red potion.",
    src: "./src/assets/items/flask_big_red.png",
  },
  1: {
    id: "greenPot",
    name: "Green Potion",
    desc: "A simple green potion.",
    src: "./src/assets/items/flask_big_green.png",
  },
  2: {
    id: "bluePot",
    name: "Blue Potion",
    desc: "A simple blue potion.",
    src: "./src/assets/items/flask_big_blue.png",
  },
  3: {
    id: "swordSteel",
    name: "Steel Sword",
    desc: "A steel sword, you blind?",
    src: "./src/assets/items/weapon_sword_steel.png",
  },
  4: {
    id: "bomb",
    name: "Bomb",
    desc: "Boom boom pow.",
    src: "./src/assets/items/weapon_bomb.png",
  },
  5: {
    id: "hammer",
    name: "Hammer",
    desc: "Player smash!",
    src: "./src/assets/items/weapon_hammer.png",
  },
  6: {
    id: "yellowPot",
    name: "Yellow Potion",
    desc: "A simple yellow potion.",
    src: "./src/assets/items/flask_big_yellow.png",
  },
};

export default Item;
