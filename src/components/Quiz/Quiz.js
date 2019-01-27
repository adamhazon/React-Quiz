import React, { Component } from 'react';
import { connect } from 'react-redux';

import './quiz.css';

import { AppStoreActions } from '../../redux/app-store';
import { QuizStoreActions } from '../../redux/quiz-store';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.timerTime = 30;

    this.state = {
      answer: '',
      timer: this.timerTime
    };

    // Fetch a new question
    this.props.dispatch(QuizStoreActions.getRandomQuiz(this.props.quizIds));

    this.timer = setInterval(() => {
      let newTimer = this.state.timer;
      newTimer--;
      this.setState({...this.state, timer: newTimer});
      if (newTimer < 1) {
        // Time Up
        this.youLose('Time Up - Game Over');
      }
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the timer when component distroyed
    clearInterval(this.timer);
  }

  handleChange = (event) => {
    // Update the answer in the state when changed
    this.setState({answer: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.answer.toLowerCase()
        === this.props.quiz.answer.toLowerCase()) {
      // Correct Answer
      this.setState({answer: '', timer: this.timerTime});
      this.props.dispatch(AppStoreActions.correctAnswer());
      // Check if we didn't reach the last round and we are still playing
      if (this.props.playing) {
        // Fetch a new question
        this.props.dispatch(QuizStoreActions.getRandomQuiz(this.props.quizIds));
      }
    } else {
      // Wrong Answer
      this.youLose('Wrong - Game Over');
    }
  }

  // Game Over - Support differnt messages
  youLose = (message) => {
    this.setState({answer: '', timer: this.timerTime});
    this.props.dispatch(AppStoreActions.reset(message));
  }

  // Fill in the right answer
  fillAnswer = (answer) => {
    this.setState({...this.state, answer: answer});
  }

  render() {
    const { quiz } = this.props;

    return (
      quiz.category ?
      <div className="quiz-card">
        <div className="quiz-category">Category: {quiz.category.title}</div>
        <label className="label">Question:</label>
        <h4 className="quiz-question">{quiz.question}</h4>
        <label className="label">Answer:</label>
        <form className="answer-form" onSubmit={this.handleSubmit}>
          <textarea className="answer-input" value={this.state.answer}
            onChange={this.handleChange} />
          <div className="buttons">
            <input className="hint-button" type="button" value="Hint"
              onClick={() => this.fillAnswer(quiz.answer)}/>
            <input className="submit-button" type="submit" value="Submit" />
          </div>
        </form>
        <div className="timer">{this.state.timer} seconds left to answer</div>
      </div>
      : null
    );
  }
}

export default connect(state => state.quizState)(Quiz);
