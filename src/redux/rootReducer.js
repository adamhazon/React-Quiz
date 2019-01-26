import { combineReducers } from 'redux';
import { AppStoreReducer } from './app-store';
import { QuizStoreReducer } from './quiz-store';

const rootReducer =  combineReducers({
  appState: AppStoreReducer.reducer,
  quizState: QuizStoreReducer.reducer
});

export default rootReducer;
