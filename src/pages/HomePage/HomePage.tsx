import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useAppNavigation} from '../../types/types';
import Card from '../../components/Card/Card';
import {ImageType} from '../../types';
import {fetchListPhotos} from '../../store/middleware/photos';
import {useAppDispatch} from '../../store';
import {photosSelectors} from '../../store/slices/photosSlice';
import {useSelector} from 'react-redux';

const HomePage = () => {
  const photosArr = useSelector(photosSelectors.images);
  const nav = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListPhotos() as any);
  }, [dispatch]);

  const onSignUpPress = (id: string) => {
    nav.navigate('ImagePage', {id});
  };

  const renderItem = ({item}) => (
    <View style={styles.sectionContainer}>
      <Card item={item} onImagePress={onSignUpPress} />
    </View>
  );

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        data={photosArr}
        numColumns={2}
        keyExtractor={(el: ImageType) => el.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
