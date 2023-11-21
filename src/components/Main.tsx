import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Main() {
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    return (      
        <main>
            <button className='sidebar-toggle' onClick={() => setShowSidebar(true)}>
                <FaBars />
            </button>
            <button className='btn' onClick={() => setShowModal(true)}>
            show modal
            </button>
        </main>
    )
};
