import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './components/code01';
import Counter from './components/code02';

function App() {
  return (
    <div className="App">
      <Greeting name={`Daniel`}/>
      <Counter/>
    </div>
  );
}

export default App;
