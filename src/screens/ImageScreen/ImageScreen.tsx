import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  ActivityIndicator,
  Button,
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

export const ImageScreen = ({navigation, route}: ImagePageProps) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();

  const photo = useSelector(photosSelectors.image);
  const loading = useSelector(photosSelectors.loadingImage);
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchCurrentPhoto({id}));

    const unsubscribe = () => {
      dispatch(imageActions.clearImg());
    };

    return unsubscribe;
  }, [id, dispatch, navigation]);

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
