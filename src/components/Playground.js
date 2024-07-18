import React, { useState, useEffect, useRef } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import p5 from 'p5';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript'; // Correct the import
import './Playground.css';

const Playground = () => {
  const [code, setCode] = useState(`function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}`);
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let customSketch = new Function('p', code);
      p.setup = () => {
        p.createCanvas(400, 400);
        p.noLoop();
      };
      p.draw = () => {
        p.background(220);
      };
      try {
        customSketch(p);
      } catch (err) {
        console.error('Error in custom sketch:', err);
      }
    };

    let sketchInstance = new p5(sketch, sketchRef.current);
    return () => {
      sketchInstance.remove();
    };
  }, [code]);

  const handleCodeChange = (editor, data, value) => {
    setCode(value);
  };

  return (
    <div className="playground">
      <div className="editor-container">
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
          }}
          onBeforeChange={handleCodeChange}
        />
      </div>
      <div className="sketch-container" ref={sketchRef}></div>
    </div>
  );
};

export default Playground;
