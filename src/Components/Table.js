import React, { useState } from "react";
import Modal from "./Modal";
import MenuSection from "./MenuSection";

const Table = ({ menu }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  const openModal = (e) => {
    setIsModalOpen(true);

    const clickedItemSection =
      e.target.parentElement.parentElement.firstChild.innerText;
    const clickedItemText = e.target.parentElement.firstChild.innerText;
    const findObjectSection = menu.menu_sections.find(
      (item) => item.section_name === clickedItemSection
    );
    const findObject = findObjectSection.menu_items.find(
      (item) => item.name === clickedItemText
    );
    const objectDescription = findObject.description;

    setModalContent([clickedItemText, objectDescription]);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="menu-wrapper">
      <MenuSection openModal={openModal} menu={menu.menu_sections[14]} />
      <MenuSection openModal={openModal} menu={menu.menu_sections[16]} />
      <MenuSection openModal={openModal} menu={menu.menu_sections[17]} />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        modalContent={modalContent}
      />
    </div>
  );
};

export default Table;
