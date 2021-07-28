import React, { useState } from "react";
import Modal from "./Modal";

const Table = ({ menu }) => {
  const { result } = menu;
  const { menus } = result;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (e) => {
    setIsModalOpen(true);
    // preveri ce sem kliknil p, vzemi text in ga najdi v apiju, potem pa prikazi podatke
    const clickedItem = e.target.innerText;
    setModalContent(clickedItem);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="menu-wrapper">
      <div className="menu-section">
        <h2>{menus[0].menu_sections[14].section_name}</h2>
        {menus[0].menu_sections[14].menu_items.map((item, key) => {
          const { name, price } = item;
          return (
            <button className="menu-item" onClick={openModal}>
              <p>{name}</p>
              <span>${price}</span>
            </button>
          );
        })}
      </div>
      <div className="menu-section">
        <h2>{menus[0].menu_sections[16].section_name}</h2>
        {menus[0].menu_sections[16].menu_items.map((item, key) => {
          const { name, price } = item;
          return (
            <button className="menu-item" onClick={openModal}>
              <p>{name}</p>
              <span>${price}</span>
            </button>
          );
        })}
      </div>
      <div className="menu-section">
        <h2>{menus[0].menu_sections[17].section_name}</h2>
        {menus[0].menu_sections[17].menu_items.map((item, key) => {
          const { name, price } = item;
          return (
            <button className="menu-item" onClick={openModal}>
              <p>{name}</p>
              <span>${price}</span>
            </button>
          );
        })}
      </div>
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default Table;
