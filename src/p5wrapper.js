import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myP5 = new p5(sketch, canvasRef.current);
    return () => myP5.remove();
  }, [sketch]);

  return <div ref={canvasRef}></div>;
};

export default P5Wrapper;
