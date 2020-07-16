import React from 'react';
import Reactpip from 'react-picture-in-picture';
import '../../components/navbar/navbar.css';

function Portfolios() {
  const [active, setActive] = React.useState(false);

  return (
    <>
      <Reactpip autoplay isActive={active} style={{width: '100vw'}} classOnEnable="on-enable">
        <source src="https://cdn.arnellebalane.com/videos/original-video.mp4" />
      </Reactpip>
      <button onClick={() => setActive(!active)}>Toggle Picture in Picture</button>
    </>
  )
}

export default Portfolios;
