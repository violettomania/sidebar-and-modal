import { useAppSelector, useAppDispatch } from '../hooks/hooks';
import { hideSidebar } from '../slices/sidebarSlice';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../data';

export default function Sidebar() {
  const sidebarState = useAppSelector((state) => state.sidebar.value);
  const dispatch = useAppDispatch();

  return (
    <aside className={`sidebar ${sidebarState && 'show-sidebar'}`}>
      <div className='sidebar-header'>
        <img src='/assets/logo.svg' className='logo' alt='coding addict' />
        <button className='close-btn' onClick={() => dispatch(hideSidebar())}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, url, text, icon }) => (
          <li key={id}>
            <a href={url}>
              {icon}
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className='social-icons'>
        {social.map(({ id, url, icon }) => (
          <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
