import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from '../data';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    return (      
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
    )
};
