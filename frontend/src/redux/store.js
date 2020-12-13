import { configureStore } from '@reduxjs/toolkit';
import quizzReducer from './quizz';
export default configureStore({
  reducer: {
    quizz: quizzReducer,
  },
});
