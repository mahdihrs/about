import React from 'react';
import aingPotrait from '../../assets/me-lofi2-BW.png';
import SocialMedia from '../../components/navbar/index';
import Overflow from '../../components/overflow-menu';
import './landing-page.css';

function LandingPage() {
  return (
    <>
      <Overflow />
      <div id="container">
        <div id="social-media-wrapper">
          <SocialMedia />
        </div>
        <img src={aingPotrait} alt="gambar diriku" id="banner-image" />
      </div>
    </>
  )
}

export default LandingPage;
