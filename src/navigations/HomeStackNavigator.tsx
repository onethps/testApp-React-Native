import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types';
import {HomeScreen, ImageScreen} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name={'ImageScreen'}
        component={ImageScreen}
        options={{
          title: 'Image',
        }}
      />
    </Stack.Navigator>
  );
};
