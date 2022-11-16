import Item from "./item.js";

class Inventory {
  constructor() {
    this.inventoryList = {};
  }

  addItem(item, amt) {
    // debugger;
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
    const section = document.querySelector(".inventory-desc");
    // debugger;
    let keys = Object.keys(this.inventoryList);
    keys.forEach((item) => {
      // console.log(keys);
      // console.log(item);
      if (!document.querySelector(`[data-name='${item}']`)) {
        // debugger;
        const itemTag = document.createElement("li");
        itemTag.setAttribute("data-name", item);
        itemTag.classList.add('itemTag');
        const count = document.createElement("p");
        count.classList.add(item);
        count.innerText = this.inventoryList[item].count;
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
        itemTag.addEventListener('mouseenter', (e) => {
          section.classList.remove('hidden');
          this.showItemDesc(item);
        });
        itemTag.addEventListener('mouseleave', (e) => {
          section.classList.add('hidden');
        });
      } else if (document.querySelector(`[data-name='${item}']`)) {
        // debugger;
        const count = document.querySelector(`.${item}`);
        count.innerText = this.inventoryList[item].count;
        // debugger;
      }
    });

  }

  showItemDesc(id) {
    const section = document.querySelector(".inventory-desc");
    const image = document.querySelector(".itemImage");
    const itemName = document.querySelector(".item-name");
    const itemDesc = document.querySelector(".item-desc");
    const item = Item.findById(id);
    section.style.borderTop = '1px solid black';
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.id);
    itemName.innerHTML = `<p class='strong'>Name:</p> ${item.name}`;
    itemDesc.innerHTML = `<p class='strong'>Description:</p> ${item.desc}`;
    
  }
}

export default Inventory;
