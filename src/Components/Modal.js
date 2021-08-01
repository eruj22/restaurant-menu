import React from "react";
import { FaTimes } from "react-icons/fa";
import Random from "../Assets/random.jpg";

const Modal = ({ isModalOpen, closeModal, modalContent }) => {
  return (
    <div className={`${isModalOpen ? "modal modal-open" : "modal"}`}>
      <div className="modal-container">
        {/* in the API there is no pic included so it's just one random */}
        <div className="modal-container-img">
          <img src={Random} alt="marble" className="modal-img" />
        </div>
        <div className="modal-text">
          <h3>{modalContent[0]}</h3>
          <p>{modalContent[1]}</p>
        </div>
        <button className="modal-close-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
