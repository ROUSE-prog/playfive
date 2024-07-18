import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import P5Wrapper from './P5Wrapper';

const HomePage = () => {
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.code === 'Space') {
      navigate('/dashboard');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <P5Wrapper />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '20px' }}>
        <h1>Welcome to the p5.js Tutorial App</h1>
        <p>Press the spacebar to enter the site</p>
      </div>
    </div>
  );
};

export default HomePage;
