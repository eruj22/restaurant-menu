import React from "react";

// menu items
const entree = [
  { name: "Green tortilla with smoked bacon", price: 9 },
  { name: "Roasted tomatoes and avocado on toast", price: 8 },
  { name: "Ginger chicken stir fry", price: 11.5 },
  { name: "Shakshuka", price: 7 },
];
const desserts = [
  { name: "Jamaican ginger and caramel cake", price: 3 },
  {
    name: "Teff, banana and apricot tea loaf with hazelnut streusel topping",
    price: 2.5,
  },
];
const drinks = [
  { name: "Virgin watermelon sangria", price: 2.5 },
  { name: "Classic mimosas", price: 3 },
  { name: "Bellini", price: 2 },
  { name: "Orange and cranberry juice", price: 2 },
];

const Table = () => {
  return (
    <div className="menu-wrapper">
      <div className="menu-section">
        <h2>Brunch menu</h2>
        {entree.map((item) => {
          const { name, price } = item;
          return (
            <div className="menu-item">
              <p>{name}</p>
              <span>${price}</span>
            </div>
          );
        })}
      </div>
      <div className="menu-section">
        <h2>Desserts</h2>
        {desserts.map((dessert) => {
          const { name, price } = dessert;
          return (
            <div className="menu-item">
              <p>{name}</p>
              <span>${price}</span>
            </div>
          );
        })}
      </div>
      <div className="menu-section">
        <h2>Drinks</h2>
        {drinks.map((drink) => {
          const { name, price } = drink;
          return (
            <div className="menu-item">
              <p>{name}</p>
              <span>${price}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;
