import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineInventory2 } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import menu from '../../data/sidebar';
import './Sidebar.scss';
import SidebarItem from './SidebarItem';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="layout">
      <div className="sidebar" style={{ width: isOpen ? '230px' : '60px' }}>
        <div className="top_section">
          <div className="logo" style={{ display: isOpen ? 'block' : 'none' }}>
            <MdOutlineInventory2
              size={35}
              style={{ cursor: 'pointer' }}
              onClick={goHome}
            />
          </div>

          <div
            className="bars"
            style={{ marginLeft: isOpen ? '130px' : '0px' }}
          >
            <HiMenuAlt3 onClick={toggle} />
          </div>
        </div>
        {menu.map((item, i) => {
          return <SidebarItem key={i} item={item} isOpen={isOpen} />;
        })}
      </div>

      <main
        style={{
          paddingLeft: isOpen ? '230px' : '60px',
          transition: 'all .5s',
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
