import { useState, useEffect } from 'react';

const useWindowHeight = () => {

  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {

    const handleWindowResize = () => {
      setWindowHeight(window.innerHeight);
    };

    return () => {

      setWindowHeight(window.innerHeight);

      window.removeEventListener('resize', handleWindowResize);
    };

  });
    
};

export default useWindowHeight;