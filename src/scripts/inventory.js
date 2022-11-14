class Inventory {
  constructor() {
    this.inventoryList = {};
  }

  addItem(item, amt) {
    // debugger;
    if (!this.inventoryList[item.name]) {
      this.inventoryList[item.name] = {
        count: 0,
        src: item.src,
      };
    }
    this.inventoryList[item.name].count += amt;
    // console.log(this.inventoryList);
    this.displayGrid();
  }

  removeItem(item, amt) {
    if (this.inventoryList[item.name] - amt > 0) {
      this.inventoryList[item.name] -= amt;
    }
    this.displayGrid();
  }

  hasItem(item, amt) {
    return this.inventoryList[item.name] >= amt;
  }

  displayGrid() {
    const inventory = document.querySelector(".inventory");
    // debugger;
    let keys = Object.keys(this.inventoryList);
    keys.forEach((item) => {
      console.log(keys);
      console.log(item);
      if (!document.querySelector(`[data-name='${item}']`)) {
        debugger;
        const itemTag = document.createElement("li");
        itemTag.style.display = "block";
        itemTag.style.position = "relative";
        itemTag.style.width = "15%";
        itemTag.style.height = "15%";
        itemTag.style.border = "1px solid #000";
        itemTag.style.borderRadius = "5px";
        itemTag.style.margin = "5px";
        itemTag.setAttribute("data-name", item);
        const img = document.createElement("img");
        img.setAttribute("src", this.inventoryList[item].src);
        img.setAttribute("alt", item);
        itemTag.appendChild(img);
        // debugger;

        inventory.appendChild(itemTag);
      }
    });
  }
}

export default Inventory;
