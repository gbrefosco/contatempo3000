import React, { useState } from "react";
import { Link } from "react-router-dom";

import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";

import { SideNavData } from "./sideNavData";
import "./sideNav.css";

function SideNavMenu() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className={sidebar ? 'navbar-toggle-on' : 'navbar-toggle-off'}>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SideNavData.map((item, index) => {
              return (
                <li key={index} className={item.cName} visible={sidebar}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNavMenu;