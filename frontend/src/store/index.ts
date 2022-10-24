import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { senderApi } from './query';
import { reducer as userApi } from './slice';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userApi,
  [senderApi.reducerPath]: senderApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(senderApi.middleware),
})


setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;