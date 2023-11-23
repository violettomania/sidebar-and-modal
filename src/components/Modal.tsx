import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { hideModal } from '../slices/modalSlice';
import { FaTimes } from 'react-icons/fa';

export default function Modal() {
  const isModalShown = useAppSelector((state) => state.modal.value);
  const dispatch = useAppDispatch();

  return (
    <div className={`modal-overlay ${isModalShown && 'show-modal'}`}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button
          className='close-modal-btn'
          onClick={() => dispatch(hideModal())}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
