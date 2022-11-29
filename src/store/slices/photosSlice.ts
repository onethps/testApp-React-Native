import {fetchCurrentPhoto} from './../middleware/photos';
import {RootState} from './../index';
import {createSlice, createSelector} from '@reduxjs/toolkit';
import {ImageType} from '../../types';
import {fetchListPhotos} from '../middleware/photos';

type initType = {
  images: ImageType[];
  image: null | ImageType;
};

const initialState: initType = {
  images: [],
  image: null,
};

const {actions, reducer} = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchListPhotos.fulfilled, (state, {payload}) => {
      state.images = payload;
    });
    builder.addCase(fetchCurrentPhoto.fulfilled, (state, {payload}) => {
      state.image = payload;
    });
  },
});

const selectRoot = (state: RootState) => state.images;

export const photosSelectors = {
  images: createSelector(selectRoot, state => state.images),
  image: createSelector(selectRoot, state => state.image),
};

export const imageReducer = reducer;
