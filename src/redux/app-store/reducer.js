import * as ActionTypes from './actions';

const initialState = {
  round: 1,
  score: 0,
  points: 1
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CORRECT_ANSWER:
      return {
        round: state.round++,
        score: state.score + state.points,
        points: state.points * 2
      }
    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
}
