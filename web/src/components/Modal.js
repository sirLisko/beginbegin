import React from 'react';
import PropTypes from 'prop-types';

const Modal = props => {
  const { isModalOpen, onClose, children } = props;
  if (!isModalOpen) {
    return false;
  }
  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          X
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
