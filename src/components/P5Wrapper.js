import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Wrapper = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let shaderProgram;

      p.preload = () => {
        shaderProgram = p.loadShader('/shaders/vertex.vert', '/shaders/fragment.frag');
      };

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.noStroke();
      };

      p.draw = () => {
        shaderProgram.setUniform('u_time', p.millis() / 1000.0);
        shaderProgram.setUniform('u_resolution', [p.width, p.height]);
        p.shader(shaderProgram);
        p.rect(0, 0, p.width, p.height);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const sketchInstance = new p5(sketch, sketchRef.current);
    return () => {
      sketchInstance.remove();
    };
  }, []);

  return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}></div>;
};

export default P5Wrapper;
