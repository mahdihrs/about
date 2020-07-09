import React from 'react';
import './navbar.css';

import { social_medias } from '../../utils/constants';

function SocialMedia() {
  return (
    <div id="navbar-container">s
      {social_medias.map(menu => (
        <span key={menu.alt}>
          <a href={menu.href} target="blank">
            <img src={menu.icon} alt={menu.alt} height="35px"/>
          </a>
        </span>
      ))}
    </div>
  )
}

export default SocialMedia;
