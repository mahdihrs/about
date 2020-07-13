import React from 'react';
import aingPotrait from '../../assets/me-lofi2-BW.png';
import Overflow from '../../components/overflow-menu';
import './landing-page.css';

function LandingPage() {
  return (
    <>
      <div id="container">
        <div id="social-media-wrapper">
          <Overflow />
        </div>
        <img src={aingPotrait} alt="gambar diriku" id="banner-image" />
      </div>
    </>
  )
}

export default LandingPage;
