import React, { Component } from 'react';
import { connect } from 'react-redux';

import { QuizStoreActions } from '../../redux/quiz-store';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(QuizStoreActions.getRandomQuiz(this.props.quizIds));
  }

  render() {
    return (
      <h2 className="quiz-question">{this.props.quiz.question}</h2>
    );
  }
}

export default connect(state => state.quizState)(Quiz);
