import { configureStore } from '@reduxjs/toolkit';
import quizzReducer from './quizz';
import authReducer from './auth';
export default configureStore({
  reducer: {
    quizz: quizzReducer,
    auth:authReducer
  },
});
