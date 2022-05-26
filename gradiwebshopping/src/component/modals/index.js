// react import to handle proper jsx handling
import React from 'react'
// css-styles
import './styles.css'


//Modal component that displays the add to cart and add to favorites popups
const Modal = ({ children, isOpen, closeModal }) => {
  return (
    <article className={`modal ${isOpen && `is-open`}`} onClick={closeModal} >
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>X</button>
        { children }
      </div>
    </article>
  )
}

export default Modal;