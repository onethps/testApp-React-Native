import React, {FC} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

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

const Card: FC<Props> = ({onImagePress, item}) => {
  return (
    <TouchableOpacity
      style={{padding: 5}}
      onPress={() => onImagePress(item.id)}>
      <Image
        style={{width: '100%', height: 200, borderRadius: 10}}
        source={{uri: item.urls.thumb}}
      />
      <View style={{position: 'absolute', bottom: 20, left: 20}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
          {item.user.name}
        </Text>
        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
          {item.user.username}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
