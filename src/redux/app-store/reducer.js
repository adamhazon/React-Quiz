import * as ActionTypes from './actions';

const initialState = {
  round: 1,
  points: 1,
  score: 0,
  highScore: 0,
  playing: false,
  message: 'Welcome',
  hints: 5
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CORRECT_ANSWER:
      const { round, points, score, highScore } = state;
      const newScore = score + points;

      return {
        round: round + 1,
        points: points * 2,
        score: newScore,
        highScore: newScore > highScore ?
                   newScore :
                   highScore,
        playing: true,
        message: null
      }
    case ActionTypes.RESET:
      return {
        ...state,
        playing: false,
        message: action.payload,
        hints: initialState.hints
      };
    case ActionTypes.START:
      return {
        ...initialState,
        highScore: state.highScore,
        playing: true,
        message: null
      };
    case ActionTypes.REMOVE_HINT:
      return {
        ...state,
        hints: state.hints > 0 ? state.hints - 1 : 0
      };
    default:
      return state;
  }
}
