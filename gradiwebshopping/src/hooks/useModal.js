// react import to handle proper jsx handling
import { useState } from 'react';

/* makes use-states for handling modals
  With this function open and close the popup.*/
export const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return [isOpen, openModal, closeModal];
}

