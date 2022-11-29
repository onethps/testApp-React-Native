import React, {FC} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type ImageType = {
  id: string;
  color: string;
  urls: {full: string; regular: string; small: string; thumb: string};
  user: {username: string; name: string};
};

type Props = {
  onImagePress: (id: string) => void;
  item: ImageType;
};

export const Card: FC<Props> = ({onImagePress, item}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onImagePress(item.id)}>
      <Image style={styles.imageStyle} source={{uri: item.urls.thumb}} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{item.user.name}</Text>
        <Text style={styles.textStyle}>{item.user.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  imageStyle: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
});
