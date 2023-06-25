import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  };

  const handleAddBox = () => {
    const newBox = {
      color,
      height,
      width
    };

    setBoxes([...boxes, newBox]);
    setColor('');
    setHeight('');
    setWidth('');
  };

  return (
    <div>
      <h2>Box Generator</h2>

      <div>
        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>

      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>

      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={handleWidthChange}
        />
      </div>

      <button onClick={handleAddBox}>Add Box</button>

      <div style={{
        display:'flex',
        flexWrap:'wrap',
      }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              height: box.height,
              width: box.width,
              margin: '10px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;
