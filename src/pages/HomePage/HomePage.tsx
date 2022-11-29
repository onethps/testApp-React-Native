import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {useAppNavigation} from '../../types/types';
import Card from '../../components/Card/Card';
import {ImageType} from '../../types';
import {fetchListPhotos} from '../../store/middleware/photos';
import {useAppDispatch} from '../../store';
import {photosSelectors} from '../../store/slices/photosSlice';
import {useSelector} from 'react-redux';

const HomePage = () => {
  const photosArr = useSelector(photosSelectors.photos);
  const nav = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchListPhotos() as any);
  }, [dispatch]);

  const onSignUpPress = () => {
    nav.navigate('ImagePage');
  };

  const renderItem = ({item}) => (
    <View style={{flex: 1}}>
      <Card item={item} onImagePress={onSignUpPress} />
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
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
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
