import logo from './picture.png';
import './App.css';
import Hello from './Hello';
import Goodbye from './Goodbye';
import JSXExamples from './components/JSXExamples';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Hello/>
      <JSXExamples/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello <code>world</code> Have a good learn.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye/>
    </div>
  );
}

export default App;
