import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isSmallDevice = screenSize.width <= 767;
  const isMediumDevice = screenSize.width >= 768;
  const isLargeDevice = screenSize.width >= 992;

  return {
    screenSize,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    width: screenSize.width,
    height: screenSize.height,
  };
};

export default useResponsive; 