import React from 'react';
import './navbar.css';

import { social_medias } from '../../utils/constants';

function SocialMedia() {
  return (
    <div id="navbar-container">
      <h4>MAHDI HARIS</h4>
      {social_medias.map(menu => (
        <a href={menu.href} target="blank" key={menu.alt}>
          <div className="menu-wrapper">
            <img src={menu.icon} alt={menu.alt} height="35px" />
            <span>{menu.alt}</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export default SocialMedia;
