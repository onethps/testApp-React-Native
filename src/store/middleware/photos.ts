import {ImageType} from './../../types/image';
import {photosAPI} from './../../api/photosAPI';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
export const fetchListPhotos = createAsyncThunk<ImageType[]>(
  'images/fetchImages',
  async () => {
    const response: AxiosResponse = await photosAPI.getPhotosAPI();
    return response.data;
  },
);

export const fetchCurrentPhoto = createAsyncThunk<ImageType, {id: string}>(
  'images/fetchImage',
  async ({id}) => {
    const response: AxiosResponse = await photosAPI.getPhotoAPI(id);
    return response.data;
  },
);
