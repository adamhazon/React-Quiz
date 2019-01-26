export const LOAD_REQUEST = 'QUIZ_LOAD_REQUEST';
export const LOAD_FAILURE = 'QUIZ_LOAD_FAILURE';
export const LOAD_SUCCESS = 'QUIZ_LOAD_SUCCESS';

export const getRandomQuiz = (quizIds = []) => {
  return async (dispatch) => {
    // Initiate loading state
    dispatch({
      type: LOAD_REQUEST
    });
    try {
      // Call the API
      const url = 'http://jservice.io/api/random';
      const result = await fetch(url);
      const response = await result.json();

      // Update payload in reducer on success
      if (quizIds.indexOf(response[0].id) < 0) {
        dispatch({
          type: LOAD_SUCCESS,
          payload: response[0]
        });
      } else {
        // Do not allow duplicate question, fetch a new one
        getRandomQuiz(quizIds);
      }
    } catch (error) {
      // Update error in reducer on failure
      dispatch({
        type: LOAD_FAILURE,
        error: error
      });
    }
  };
}
