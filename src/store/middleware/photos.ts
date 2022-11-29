import {ImageType} from './../../types/image';
import {photosAPI} from './../../api/photosAPI';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';

export const fetchListPhotos = createAsyncThunk<ImageType[]>(
  'photos/fetchPhotos',
  async () => {
    const response: AxiosResponse = await photosAPI.getPhotosAPI();
    return response.data;
  },
);
