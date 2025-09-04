// menu.js

import "./menu.css";

class MenuItem {
  constructor(name, description = "") {
    this.name = name;
    this.description = description;
  }

  render () {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");

    const itemH3 = document.createElement("h3");
    itemH3.textContent = this.name;

    itemDiv.appendChild(itemH3);

    if (this.description) {
      const itemP = document.createElement("p");
      itemP.textContent = this.description;
      itemDiv.appendChild(itemP);
    }

    return itemDiv;
  }
}

class MenuCategory {
  constructor (title, emoji) {
    this.title = title;
    this.emoji = emoji;
    this.items = [];
  }

  addItem (name, description = "") {
    const item = new MenuItem(name, description);
    this.items.push(item);
  }

  render () {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("menu-category");

    const categoryH2 = document.createElement("h2");
    categoryH2.textContent = `${this.emoji} ${this.title}`;

    categoryDiv.appendChild(categoryH2);
    this.items.forEach(item => categoryDiv.appendChild(item.render()));

    return categoryDiv;
  }
}

const breakfastAndPastries = new MenuCategory("Breakfast & Pastries", "🥐");
breakfastAndPastries.addItem("Croissant", "Flaky, buttery classic");
breakfastAndPastries.addItem("Pain au Chocolat", "Croissant with rich chocolate");
breakfastAndPastries.addItem("Muffins", "Blueberry, Chocolate Chip, Banana Nut");
breakfastAndPastries.addItem("Bagel with Cream Cheese", "Plain, Sesame, or Everything");

const lightMeals = new MenuCategory("Light Meals", "🥗");
lightMeals.addItem("Quiche Lorraine", "Egg, bacon, and cheese tart");
lightMeals.addItem("Ham & Cheese Sandwich", "Served on fresh baguette");
lightMeals.addItem("Caprese Salad", "Tomato, mozzarella, basil, balsamic drizzle");
lightMeals.addItem("Soup of the Day", "Served with bread");

const hotDrinks = new MenuCategory("Hot Drinks", "☕");
hotDrinks.addItem("Espresso");
hotDrinks.addItem("Americano");
hotDrinks.addItem("Cappuccino");
hotDrinks.addItem("Latte (vanilla, caramel, or plain)");
hotDrinks.addItem("Hot Chocolate");
hotDrinks.addItem("Chai Tea Latte");

const coldDrinks = new MenuCategory("Cold Drinks", "🧊");
coldDrinks.addItem("Iced Coffee");
coldDrinks.addItem("Iced Latte (vanilla, caramel, or mocha)");
coldDrinks.addItem("Fresh Lemonade");
coldDrinks.addItem("Iced Tea (black or green)");
coldDrinks.addItem("Sparkling Water");

const desserts = new MenuCategory("Desserts", "🍰");
desserts.addItem("Cheesecake (classic or berry topping)");
desserts.addItem("Chocolate Cake", "Rich, layered, decadent");
desserts.addItem("Tiramisu", "Espresso-soaked sponge, mascarpone cream");
desserts.addItem("Fruit Tart", "Seasonal fruits, custard filling");

const menuCategories = [breakfastAndPastries, lightMeals, hotDrinks, coldDrinks, desserts];

export function renderMenu(parent){
  parent.style.alignItems = "start"

  const menuContainer = document.createElement("section");
  menuContainer.classList.add("menu-container");

  const titleH1 = document.createElement("h1");
  titleH1.textContent = "Menu";

  const categoriesNav = document.createElement("nav");
  categoriesNav.classList.add("categories-nav");

  menuCategories.forEach((category, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.dataset.categoryIndex = i;
    btn.textContent = category.title;
    categoriesNav.appendChild(btn);
  })

  categoriesNav.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!(btn)) return;
    const index = btn.dataset.categoryIndex;
    const category = menuCategories[index];

    menuDiv.replaceChildren(category.render());
  })

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-categories")
  menuCategories.forEach(category => menuDiv.appendChild(category.render()));

  menuContainer.append(titleH1, categoriesNav, menuDiv);
  parent.appendChild(menuContainer);
}