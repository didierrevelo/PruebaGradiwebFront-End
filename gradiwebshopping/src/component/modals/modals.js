// react import to handle proper jsx handling
import React from 'react';
// modal hooks
import { useModal } from '../../hooks/useModal';
// modal component import
import Modal from '../modals';
// Help so that styles that are not written in css are used as such
import { css } from 'aphrodite';
// css-styles
import './styles.css'
import styles from '../body/styles';

/*Modals is the intermediary between Modal
and BodyRender, with which the add to cart
and add to favorites buttons are rendered.*/
const Modals = ({ children }) => {
  /*modal state management, they present
  the options to open and close the modal
  from the buttons, these come from lkos hooks*/
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      {/*buttons*/}
      <div className={css(styles.containerButton)}>
          <li>
          <div className={css(styles.containerSizeButton)}>
            <button className={css(styles.button)} onClick={openModal2}>Add to Favorite</button>
          </div>
          </li>
          <li>
          <div className={css(styles.containerSizeButton)}>
            <button className={css(styles.button2)} onClick={openModal}>Add to Cart</button>
          </div>
          </li>
        </div>
      {/*modal*/}
      <Modal  isOpen={isOpenModal} closeModal={closeModal} >
        <h1>shopping cart</h1>
        {children}
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h1>Your Favorites</h1>
        {children}
      </Modal>
    </div>
  )
}

export default Modals;
