import { useState, useLayoutEffect } from 'react';

const useWindowWidth = () => {
   const [windowWidth, setWindowWidth] = useState(),
   resizeWindow = () => setWindowWidth(window.innerWidth);

   useLayoutEffect(() => {
      resizeWindow();
      window.addEventListener('resize', resizeWindow);
      return () => window.removeEventListener('resize', resizeWindow);
   }, []);

   return windowWidth;
}

export default useWindowWidth;