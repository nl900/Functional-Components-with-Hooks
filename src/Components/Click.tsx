import React, { FC, ReactElement, useState }  from 'react';

const Click: FC<{ initialClick?: number }> = ({ initialClick = 0 }): ReactElement => {
    const [click, setClick] = useState(0);
    return (
      <div>
        <p>Click: {click}</p>
        <button onClick={() => setClick(click + 1)}>Click Me!</button>
      </div>
    )
  };

  export default Click;