import React from 'react'
import "./modal.css"

const Modal = ({ show, onConfirm, onCancel, message }) => {
    if (!show) {
        return null;
      }

  return (
    <div className="modal-overlay">
    <div className="modal-content">
      <h2>Confirmation</h2>
      <p>{message}</p>
      <div className="modal-buttons">
        <button className="confirm-button" onClick={onConfirm}>
          Confirm
        </button>
        <button className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  </div>
  )
}

export default Modal