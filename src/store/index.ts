import {rootReducer} from './reducer';

import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export {store};
