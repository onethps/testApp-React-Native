import {fetchCurrentPhoto} from './../middleware/photos';
import {RootState} from './../index';
import {createSlice, createSelector} from '@reduxjs/toolkit';
import {ImageType} from '../../types';
import {fetchListPhotos} from '../middleware/photos';

type initType = {
  loading: boolean;
  images: ImageType[];
  image: null | ImageType;
};

const initialState: initType = {
  loading: false,
  images: [],
  image: null,
};

const {actions, reducer} = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    clearImg: state => {
      state.image = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchListPhotos.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchListPhotos.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.images = payload;
    });
    builder.addCase(fetchCurrentPhoto.fulfilled, (state, {payload}) => {
      state.loading = false;
      state.image = payload;
    });
  },
});

export const imageActions = {
  ...actions,
};

const selectRoot = (state: RootState) => state.images;

export const photosSelectors = {
  images: createSelector(selectRoot, state => state.images),
  image: createSelector(selectRoot, state => state.image),
  loadingImage: createSelector(selectRoot, state => state.loading),
};

export const imageReducer = reducer;
