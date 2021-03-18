import React from 'react';
import './App.css';
import Child from './Components/Child';

function App() {
  return (
    <div className="App">
      <h1>Hello </h1>
      <Child name="Billy" age={123} />

    </div>
  );
}

export default App;
