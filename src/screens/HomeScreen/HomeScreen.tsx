import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useAppNavigation} from '../../types/types';
import {ImageType} from '../../types';
import {useAppDispatch, useAppSelector} from '../../store';
import {photosSelectors} from '../../store/slices/photosSlice';
import {Card} from '../../components';
import {fetchListPhotos} from '../../store/middleware';

export const HomeScreen = () => {
  const photosArr = useAppSelector(photosSelectors.images);
  const nav = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListPhotos());
  }, [dispatch]);

  const onSignUpPress = (id: string) => {
    nav.navigate('ImageScreen', {id});
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

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});
