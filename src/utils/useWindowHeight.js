import { useState, useEffect } from 'react';

const useWindowHeight = () => {

  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
    
    return windowHeight
    
};

export { useWindowHeight };