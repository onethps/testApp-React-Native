import {photosReducer} from './slices/photosSlice';

import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
  photos: photosReducer,
});
