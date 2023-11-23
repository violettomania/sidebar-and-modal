import { useAppDispatch } from '../hooks/hooks';
import { showModal } from '../slices/modalSlice';
import { showSidebar } from '../slices/sidebarSlice';
import { FaBars } from 'react-icons/fa';

export default function Main() {
  const dispatch = useAppDispatch();

  return (
    <main>
      <button
        className='sidebar-toggle'
        onClick={() => dispatch(showSidebar())}
      >
        <FaBars />
      </button>
      <button className='btn' onClick={() => dispatch(showModal())}>
        show modal
      </button>
    </main>
  );
}
