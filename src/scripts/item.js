class Item {
  constructor(inventory, name, desc, count = 1, src, action = null) {
    this.inventory = inventory;
    this.name = name;
    this.desc = desc;
    this.count = count;
    this.src = src;
    this.action = action;
  }

  useItem() {
    if (this.action) {
      this.action();
    }
  }
}
