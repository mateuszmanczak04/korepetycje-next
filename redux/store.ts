'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import userReducer from './user';
import settingsReducer from './settings';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['settings'],
};

const reducer = combineReducers({
  settings: settingsReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
