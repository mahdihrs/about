import React from 'react';
import aingPotrait from './assets/me-lofi2-BW.png';
import SocialMedia from './components/navbar/index';

function App() {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div style={{height: '100vh', backgroundColor: 'rgb(53, 53, 53)', width: '100%'}}>
          <SocialMedia />
        </div>
        <img src={aingPotrait} alt="gambar aing" style={{height: '100vh'}} />
      </div>
    </>
  );
}

export default App;
