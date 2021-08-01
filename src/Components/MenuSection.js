import React from "react";

const MenuSection = ({ openModal, menu }) => {
  return (
    <div className="menu-section">
      <h2>{menu.section_name}</h2>
      {menu.menu_items.map((item, key) => {
        const { name, price } = item;
        return (
          <button className="menu-item" key={key} onClick={openModal}>
            <p>{name}</p>
            <span>${price}</span>
          </button>
        );
      })}
    </div>
  );
};

export default MenuSection;
