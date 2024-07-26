import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";
import "./Layout.css";
import Menus from './Menus/Menus';

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="sidebar-section">
        <div className={toggle ? "sidebar sidebar-toggle" : "sidebar"}>
          <div className={toggle ? "sidebar-toggle-icons expanded" : "sidebar-toggle-icons collapsed"}>
            <p onClick={handleToggle}>
              {toggle ? <HiArrowSmLeft size={20} /> : <HiArrowSmRight size={20} />}
            </p>
          </div>
          <Menus toggle={toggle} />
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
}

export default Layout;
