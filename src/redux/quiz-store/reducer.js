import * as ActionTypes from './actions';

const initialState = {
  quizIds: [],
  quiz: {},
  isLoading: false,
  error: {}
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case ActionTypes.LOAD_SUCCESS:
      return {
        quizIds: [...state.quizIds, action.payload.id],
        quiz: action.payload,
        isLoading: false
      }
    case ActionTypes.LOAD_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state;
  }
}
