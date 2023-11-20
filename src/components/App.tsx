import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from '../data';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <main>
        <button className='sidebar-toggle' onClick={() => setShowSidebar(true)}>
          <FaBars />
        </button>
        <button className='btn' onClick={() => setShowModal(true)}>
          show modal
        </button>
      </main>
      <div className={`modal-overlay ${showModal && 'show-modal'}`}>
        <div className='modal-container'>
          <h3>modal content</h3>
          <button
            className='close-modal-btn'
            onClick={() => setShowModal(false)}
          >
            <FaTimes />
          </button>
        </div>
      </div>
      <aside className={`sidebar ${showSidebar && 'show-sidebar'}`}>
        <div className='sidebar-header'>
          <img src='/assets/logo.svg' className='logo' alt='coding addict' />
          <button className='close-btn' onClick={() => setShowSidebar(false)}>
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
    </>
  );
}
