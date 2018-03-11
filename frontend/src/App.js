import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Main from './components/main.js';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Main/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
