import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { links, social } from '../data';

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <main>
        <button
          className='sidebar-toggle'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FaBars />
        </button>
        <button className='btn'>show modal</button>
      </main>
      <div className='modal-overlay'>
        <div className='modal-container'>
          <h3>modal content</h3>
          <button className='close-modal-btn'>
            <FaTimes />
          </button>
        </div>
      </div>
      <aside className={showSidebar ? 'show-sidebar sidebar' : 'sidebar'}>
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
