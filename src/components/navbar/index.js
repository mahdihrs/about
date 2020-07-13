import React from 'react';
import './navbar.css';

import { social_medias } from '../../utils/constants';

function SocialMedia() {
  return (
    <div id="navbar-container">
      <h4>MAHDI HARIS</h4>
      {social_medias.map(menu => (
        <div className="menu-wrapper" key={menu.alt}>
          <a href={menu.href} target="blank">
            <img src={menu.icon} alt={menu.alt} height="35px" />
          </a>          
          <span>{menu.alt}</span>
        </div>
      ))}
    </div>
  )
}

export default SocialMedia;
