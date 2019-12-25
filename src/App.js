import React from 'react';
import {Button} from 'antd';
import logo from '../public/assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="App">
          <Button type="primary">Button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
