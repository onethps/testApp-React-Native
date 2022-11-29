import axios from 'axios';
import {REACT_APP_UNSPLASH_ACCESS_KEY} from '@env';

export const photosAPI = {
  getPhotosAPI() {
    return axios.get(
      `https://api.unsplash.com/photos/?client_id=${REACT_APP_UNSPLASH_ACCESS_KEY}`,
    );
  },
  getPhotoAPI(id: string) {
    return axios.get(
      `https://api.unsplash.com/photos/${id}/?client_id=${REACT_APP_UNSPLASH_ACCESS_KEY}`,
    );
  },
};
