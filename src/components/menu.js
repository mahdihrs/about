import React from 'react';
import { Link } from "gatsby";

import { menu_list } from '../constants';

const Menu = () => {
  return (
    <div className="menu-container">
      {menu_list.map(menu => (
        <Link to={menu.url}>
          <div>{menu.name}</div>
        </Link>
      ))}
    </div>
  )
}

export default Menu;
