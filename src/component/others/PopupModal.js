import React from "react";
import { createPortal } from "react-dom";
import { BiX } from "react-icons/bi";
import Button from "../button/Button";
import "./modal.css";
const PopupModal = ({ closeForm }) => {
  return createPortal(
    <>
      <div className="modal-warrper" onClick={closeForm}></div>
      <div className="modal-container">
        <div className="Modal-header">
          <p>Dialog Title</p>
          <div className="modal-cross-icon" onClick={closeForm}>
            <BiX />
          </div>
        </div>
        <div className="modal-body-message">
          <div className="modal-body-message">
            Could you explain the steps for setting up a login interface here?
            {/* outside or press escape key in order to close the dialog */}
          </div>
        </div>
        <div className="button-container-modal">
          <Button
            name="done"
            // className="modal-click-btn-done"
            onClick={closeForm}
          />

          {/* <button onClick={closeModal} className="modal-click-btn-host">
          CANCEL
        </button>
        <button className="modal-click-btn-done" onClick={closeModal}>
          Done
        </button> */}
        </div>
        {/* </div> */}
      </div>
    </>,
    document.querySelector(".modal-protalReact")
  );
};

export default PopupModal;
