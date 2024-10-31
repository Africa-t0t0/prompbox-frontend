import React from 'react';
import '../Styles/Marquee.css';

function Marquee({ text }) {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {text}
      </div>
    </div>
  );
}

export default Marquee;