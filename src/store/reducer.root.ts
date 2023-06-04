import { combineReducers } from '@reduxjs/toolkit';

import appReducer, { appSlice } from './app/app.slice';

const allReducer = combineReducers({
  [appSlice.name]: appReducer,
});

export const persistedReducer = allReducer;
