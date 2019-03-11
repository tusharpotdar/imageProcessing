import React, { Component } from 'react';
import Viewer from './viewer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Viewer src='sampleimage.jpg' />
    );
  }
}

export default App;
