import axios from 'axios';

export const photosAPI = {
  getPhotosAPI() {
    return axios.get(
      'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
    );
  },
  getPhotoAPI(id: string) {
    return axios.get(
      `https://api.unsplash.com/photos/${id}/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043`,
    );
  },
};
