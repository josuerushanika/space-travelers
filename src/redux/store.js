import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
  },

});

export default store;
