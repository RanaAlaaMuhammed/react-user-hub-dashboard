// src/components/Background.tsx
import React from 'react';
import bgImage from '../assets/background.jpg';

const Background: React.FC = () => (
  <>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -2,
      }}
    >
      <img
        src={bgImage}
        alt="background"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'blur(8px)',
          transform: 'scale(1.05)',
        }}
      />
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: -1,
      }}
    />
  </>
);

export default Background;
