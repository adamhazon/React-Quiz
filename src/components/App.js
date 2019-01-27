import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppStoreActions } from '../redux/app-store';

import './app.css';

import StatusBar from './status-bar/status-bar';
import Quiz from './quiz/quiz';

class App extends Component {

  constructor(props) {
    super(props)
    this.maxRounds = 30;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Check if we completed the final round
    if (this.props.round > this.maxRounds) {
      this.props.dispatch(AppStoreActions.reset('You Won!!!'));
    }
  }

  startGame = () => {
    this.props.dispatch(AppStoreActions.start());
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">React Quiz</h1>
        </header>
        <StatusBar state={this.props} maxRounds={this.maxRounds} />
        <div className="canvas">
          {this.props.message &&
            <h2 className="message">
              {this.props.message}
            </h2>
          }
          {this.props.playing && <Quiz playing={this.props.playing} />}
          {!this.props.playing &&
            <div className="button" onClick={() => this.startGame()}>
              Start
            </div>
          }
        </div>
      </div>
    );
  }
}

export default connect(state => state.appState)(App);
