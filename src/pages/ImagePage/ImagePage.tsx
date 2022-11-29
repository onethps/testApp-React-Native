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
import {photosSelectors} from '../../store/slices/photosSlice';
import {ImagePageProps} from '../../types';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

const ImagePage = ({route}: ImagePageProps) => {
  const {id} = route.params;
  const dispatch = useAppDispatch();

  const [isLoaded, setisLoaded] = useState(0);

  const photo = useSelector(photosSelectors.image);

  console.log(photo?.urls);

  useEffect(() => {
    dispatch(fetchCurrentPhoto({id}) as any);
    console.log(id);
  }, [id]);

  if (!photo) {
    return (
      <View style={styles.sectionContainer}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ActivityIndicator size="small" color="#FFD700" />
      <FastImage
        style={styles.imageStyle}
        source={{
          uri: photo?.urls?.regular,
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
        onProgress={e => (
          <ProgressBar progress={e.nativeEvent.loaded} width={200} />
        )}
      />
    </SafeAreaView>
  );
};

export default ImagePage;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
