import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import { reduxPersistStorage } from 'share/storage';

import appReducer, { appSlice } from './app/app.slice';

const appPersistConfig = {
  key: 'root',
  version: 1,
  storage: reduxPersistStorage,
};

const allReducer = combineReducers({
  [appSlice.name]: appReducer,
});

export const persistedReducer = persistReducer(appPersistConfig, allReducer);
