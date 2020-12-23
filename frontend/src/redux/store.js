import { configureStore } from '@reduxjs/toolkit';
import quizzReducer from './quizz';
import authReducer from './auth';
import userReducer from './user';
export default configureStore({
  reducer: {
    quizz: quizzReducer,
    auth:authReducer,
    user:userReducer
  },
});
