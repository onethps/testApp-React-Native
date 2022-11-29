import {imageReducer} from './slices/photosSlice';

import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  images: imageReducer,
});
