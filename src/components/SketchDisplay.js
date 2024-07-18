import React, { useEffect, useRef } from 'react';
import p5 from 'p5';
import { useParams } from 'react-router-dom';

const sketches = {
  1: (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(200);
    };
  },
  2: (p) => {
    p.setup = () => {
      p.createCanvas(400, 400);
      p.background(255);
      p.fill(0);
      p.rect(100, 100, 200, 200);
    };
  },
  // Add more sketches as needed
};

const SketchDisplay = () => {
  const { id } = useParams();
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = new p5(sketches[id], sketchRef.current);
    return () => {
      sketch.remove();
    };
  }, [id]);

  return (
    <div>
      <h1>Sketch {id}</h1>
      <div ref={sketchRef}></div>
    </div>
  );
};

export default SketchDisplay;
