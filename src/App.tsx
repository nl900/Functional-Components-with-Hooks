import React from 'react';
import './App.css';
import Child from './Components/Child';
import Click from './Components/Click';
import Button from './Components/Button';

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Child name="Billy" age={123} />
      <Click />
      <Button />
    </div>
  );
}

export default App;
