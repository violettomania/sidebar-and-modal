import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`modal-overlay ${showModal && 'show-modal'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={() => setShowModal(false)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
