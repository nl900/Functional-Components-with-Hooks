import React, { FC, ReactElement, useEffect, useState }  from 'react';

type ButtonProps = {

  }

const Button: FC<ButtonProps> = (): ReactElement => {
    const [clickA, setClickA] = useState(0);
    const [clickB, setClickB] = useState(0);
  
    useEffect(() => {
      if (clickA === 0) {
        console.log('Component loaded!')
      } else {
        console.log('Button A was clicked!');
      }
    }, [clickA]);
  
    return (
      <div>
        <p>A Clicks: {clickA}</p>
        <p>B Clicks: {clickB}</p>
        <button onClick={() => setClickA(clickA + 1)}>Button A</button>
        <button onClick={() => setClickB(clickB + 1)}>Button B</button>
        <p id="click-a"></p>
      </div>
    )
  };

export default Button;