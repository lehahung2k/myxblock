import React, { useState } from 'react';
import './App.css';

function App() {
  const [isRing, setIsRing] = useState(false);

  const hasClassName = (inElement, inClassName) => {
    const regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)');
    return regExp.test(inElement.className);
  };

  const addClassName = (inElement, inClassName) => {
    if (!hasClassName(inElement, inClassName)) {
      inElement.className = [inElement.className, inClassName].join(' ');
    }
  };

  const removeClassName = (inElement, inClassName) => {
    if (hasClassName(inElement, inClassName)) {
      const regExp = new RegExp('(?:^|\\s+)' + inClassName + '(?:\\s+|$)', 'g');
      const curClasses = inElement.className;
      inElement.className = curClasses.replace(regExp, ' ');
    }
  };

  const toggleClassName = (inElement, inClassName) => {
    if (hasClassName(inElement, inClassName)) {
      removeClassName(inElement, inClassName);
    } else {
      addClassName(inElement, inClassName);
    }
  };

  const toggleShape = () => {
    const shape = document.getElementById('shape');
    if (hasClassName(shape, 'ring')) {
      removeClassName(shape, 'ring');
      addClassName(shape, 'cube');
    } else {
      removeClassName(shape, 'cube');
      addClassName(shape, 'ring');
    }

    const stage = document.getElementById('stage');
    if (hasClassName(shape, 'ring')) {
      stage.style.transform = 'translateZ(-200px)';
    } else {
      stage.style.transform = '';
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'right', padding: '15px' }}>
        <button onClick={toggleShape}>Đổi kiểu</button>&nbsp;
      </div>

      <div id="container">
        <div id="stage">
          <div
            id="shape"
            className={`cube backfaces ${isRing ? 'ring' : 'cube'}`}
            style={isRing ? { transform: 'translateZ(-200px)' } : {}}
          >
            <div className="plane one"></div>
            <div className="plane two"></div>
            <div className="plane three"></div>
            <div className="plane four"></div>
            <div className="plane five"></div>
            <div className="plane six"></div>
            <div className="plane seven"></div>
            <div className="plane eight"></div>
            <div className="plane nine"></div>
            <div className="plane ten"></div>
            <div className="plane eleven"></div>
            <div className="plane twelve"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
