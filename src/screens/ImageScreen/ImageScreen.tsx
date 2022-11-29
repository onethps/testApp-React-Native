import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useAppDispatch} from '../../store';
import {fetchCurrentPhoto} from '../../store/middleware/photos';
import {imageActions, photosSelectors} from '../../store/slices/photosSlice';
import {ImagePageProps} from '../../types';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

export const ImageScreen = ({route}: ImagePageProps) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();

  const photo = useSelector(photosSelectors.image);
  const loading = useSelector(photosSelectors.loadingImage);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

  console.log(photo);

  useEffect(() => {
    dispatch(fetchCurrentPhoto({id}));

    () => imageActions.clearImg();
  }, [id, dispatch]);

  if (loading) {
    return (
      <View style={styles.sectionContainer}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.sectionContainer}>
      {loadingImage && (
        <ActivityIndicator style={styles.loader} size="large" color="#000000" />
      )}
      <FastImage
        style={styles.imageStyle}
        source={{
          uri: photo?.urls?.regular,
        }}
        onProgress={e =>
          console.log(e.nativeEvent.loaded / e.nativeEvent.total)
        }
        onLoadStart={() => setLoadingImage(true)}
        onLoadEnd={() => setLoadingImage(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  loader: {
    justifyContent: 'center',

    width: '100%',
    height: '100%',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
