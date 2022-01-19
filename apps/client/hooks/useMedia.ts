import { useEffect, useState } from 'react';

export const useMedia = (minWidth, maxWidth) => {
  const [state, setState] = useState({ windowWidth: 0, isDevice: false });

  // useEffect(() => {
  //   setState({windowWidth: window.innerWidth, isDevice:false})
  // },[]);

  useEffect(() => {
    const currentWidth = window.innerWidth;

    const isDevice = currentWidth >= minWidth && currentWidth <= maxWidth;
    // console.log(window)
    setState({ windowWidth: window.innerWidth, isDevice });
  }, []);

  useEffect(() => {
    const resizeHandler = () => {
      const currentWidth = window.innerWidth;

      const isDevice = currentWidth >= minWidth && currentWidth <= maxWidth;

      setState({ windowWidth: window.innerWidth, isDevice });
    };

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [state.windowWidth]);

  return state.isDevice;
};
