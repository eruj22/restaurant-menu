import React from "react";
import { FaTimes } from "react-icons/fa";

const Modal = ({ isModalOpen, closeModal, modalContent }) => {
  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      <div className="modal-container">
        <h3>{modalContent}</h3>
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
