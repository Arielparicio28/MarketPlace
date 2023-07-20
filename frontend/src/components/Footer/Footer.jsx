// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Footer.css'

const Footer = () => {
  const bubbles = Array.from({ length: 128 }, (_, index) => (
    <div
      key={index}
      className="bubble"
      style={{
        '--size': `${2 + Math.random() * 4}rem`,
        '--distance': `${6 + Math.random() * 4}rem`,
        '--position': `${-5 + Math.random() * 110}%`,
        '--time': `${2 + Math.random() * 2}s`,
        '--delay': `${-1 * (2 + Math.random() * 2)}s`,
      }}
    />
  ));

  return (
    <div className="main">
      <div className="footer">
        <div className="bubbles">{bubbles}</div>
        <div className="content">
          <div>
           
      
          </div>
          <div>
           
            <p>©2019 Not Really</p>
          </div>
        </div>
      </div>
      <svg style={{ position: 'fixed', top: '100vh' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob" />
            {/*feComposite(in="SourceGraphic" in2="blob" operator="atop")*/}
            {/*After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect.*/}
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Footer;
