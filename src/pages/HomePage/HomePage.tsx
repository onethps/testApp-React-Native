import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {useAppNavigation} from '../../types/types';

type ImageType = {
  id: string;
  color: string;
  urls: {full: string; regular: string; small: string; thumb: string};
  user: {username: string; name: string};
};

const HomePage = () => {
  const [img, setImg] = useState<ImageType[]>([]);
  const nav = useAppNavigation();

  useEffect(() => {
    const getImg = async () => {
      const {data} = await axios.get<ImageType[]>(
        'https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
      );
      //   console.log(data[0].urls.thumb);

      setImg(data);
    };

    getImg();
  }, []);

  const onSignUpPress = () => {
    nav.navigate('ImagePage');
    // setError(null);
  };

  return (
    <SafeAreaView>
      <FlatList
        data={img}
        numColumns={2}
        keyExtractor={(el: ImageType) => el.id}
        renderItem={({item}) => {
          console.log(item.urls.small);
          return (
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={{padding: 5}}
                onPress={() => onSignUpPress()}>
                <Image
                  style={{width: '100%', height: 200, borderRadius: 10}}
                  source={{uri: item.urls.thumb}}
                />
                <View style={{position: 'absolute', bottom: 20, left: 20}}>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                    {item.user.name}
                  </Text>
                  <Text
                    style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
                    {item.user.username}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
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
