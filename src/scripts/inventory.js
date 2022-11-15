class Inventory {
  constructor() {
    this.inventoryList = {};
  }

  addItem(item, amt) {
    debugger;
    if (!this.inventoryList[item.id]) {
      this.inventoryList[item.id] = {
        count: 0,
        src: item.src,
      };
    }
    // debugger;
    this.inventoryList[item.id].count += amt;
    // console.log(this.inventoryList);
    this.displayGrid();
  }

  removeItem(item, amt) {
    if (this.inventoryList[item.id] - amt > 0) {
      this.inventoryList[item.id] -= amt;
    }
    this.displayGrid();
  }

  hasItem(item, amt) {
    return this.inventoryList[item.id] >= amt;
  }

  displayGrid() {
    const inventory = document.querySelector(".inventory");
    // debugger;
    let keys = Object.keys(this.inventoryList);
    keys.forEach((item) => {
      // console.log(keys);
      // console.log(item);
      if (!document.querySelector(`[data-name='${item}']`)) {
        // debugger;
        const itemTag = document.createElement("li");
        itemTag.style.display = "block";
        itemTag.style.position = "relative";
        itemTag.style.width = "15%";
        itemTag.style.height = "15%";
        itemTag.style.border = "1px solid #000";
        itemTag.style.borderRadius = "5px";
        itemTag.style.margin = "5px";
        itemTag.setAttribute("data-name", item);
        const count = document.createElement("p");
        count.classList.add(item.id);
        count.innerText = this.inventoryList[item].count; //add live count
        count.style.position = "absolute";
        count.style.fontSize = "16px";
        count.style.left = "5px";
        itemTag.appendChild(count);
        const img = document.createElement("img");
        img.setAttribute("src", this.inventoryList[item].src);
        img.setAttribute("alt", item);
        itemTag.appendChild(img);
        // debugger;
        inventory.appendChild(itemTag);
      } else if (document.querySelector(`[data-name='${item}']`)) {
        debugger;
        const count = document.querySelector(`.${item}`);
        count.innerText = this.inventoryList[item].count;
      }
    });
  }
}

export default Inventory;
