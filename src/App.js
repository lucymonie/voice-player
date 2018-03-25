import React, { Component } from 'react';
import SpeechRecognition from './speech/Dictaphone';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <div className="header center-align">
        <h2>Tell it what you want it to play</h2>
        <SpeechRecognition />
      </div>
      </div>
    );
  }
}

export default App;
