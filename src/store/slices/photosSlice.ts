import {RootState} from './../index';
import {createSlice, createSelector} from '@reduxjs/toolkit';
import {ImageType} from '../../types';
import {fetchListPhotos} from '../middleware/photos';

const initialState = {
  isLoadingPhoto: false,
  isLoadingPhotos: false,
  isLoadingRandomPhotos: false,
  photos: [] as ImageType[],
  randomPhotos: [],
};

const {actions, reducer} = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchListPhotos.fulfilled, (state, {payload}) => {
      state.photos = payload;
    });
  },
});

const selectRoot = (state: RootState) => state.photos;
export const photosSelectors = {
  photos: createSelector(selectRoot, state => state.photos),
};

export const photosReducer = reducer;
