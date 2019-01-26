import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import Quiz from './Quiz/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Quiz</h1>
        </header>
        <Quiz />
      </div>
    );
  }
}

export default connect(state => state.appState)(App);
