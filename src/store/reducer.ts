import {combineReducers} from 'redux';
import {imageReducer} from './slices';

export const rootReducer = combineReducers({
  images: imageReducer,
});
