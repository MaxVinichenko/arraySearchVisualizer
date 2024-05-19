import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";

export default function Modal({status, setStatus}) {

  function closeModal() {
    setStatus(false);
  }

  if(status) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {status && (
        <>
        <div className="modal">
          <div onClick={closeModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Please select a start and end node by clicking on the grid before running the algorithm.</h2>
            <button className="close-modal" onClick={closeModal}>X</button>
          </div>
        </div>
        </>
      )}
    </>
  );
}