import React from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Modal = props => {
  const { isModalOpen, onClose, children } = props;
  if (!isModalOpen) {
    return false;
  }
  disableBodyScroll(document.body);
  const handleClose = () => {
    enableBodyScroll(document.body);
    onClose();
  };
  return (
    <div className="modal__backdrop" onClick={handleClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose}>
          <IoIosClose />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
