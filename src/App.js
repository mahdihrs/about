import React from 'react';
import aing from './assets/me-lofi.jpeg'
import Navbar from './components/navbar/index';

function App() {
  return (
    <>
      <Navbar />
      <img src={aing} alt="gambar aing" style={{height: '100vh'}} />
    </>
  );
}

export default App;
