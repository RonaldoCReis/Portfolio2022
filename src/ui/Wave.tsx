import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const Wave = () => {
  useEffect(() => {
    var tween = KUTE.fromTo(
      '#wave1',
      { path: '#wave1' },
      { path: '#wave2' },
      { repeat: 999, duration: 6000, yoyo: true }
    );
    tween.start();
  }, []);
  return (
    <div className="waveContainer">
      <svg
        className="wave"
        viewBox="0 0 1280 416"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            id="wave1"
            d="M454 28.1845C223 61.1845 277.5 -49.3155 -5 28.1845L-29 415.184H1372C1374.83 362.018 1386.5 225 1343.5 225C1285.48 225 1284 119.795 1146 136.5C1008 153.205 971.38 73.2013 849.5 79.5C656 89.5 685 -4.81552 454 28.1845Z"
            fill="#26252C"
          />
        </g>
        <g style={{ visibility: 'hidden' }}>
          <path
            id="wave2"
            d="M454 23.1847C230.475 -40.3627 271.5 53.0002 -5 23.1847L-29 410.185H1372C1374.83 357.018 1372 354.5 1343.5 220C1331.47 163.239 1245.5 184 1146 131.5C1046.5 79.0006 986.5 160.5 849.5 74.5002C720 -6.7915 634.5 74.5002 454 23.1847Z"
            fill="#26252C"
          />
        </g>
      </svg>
    </div>
  );
};

export default Wave;
