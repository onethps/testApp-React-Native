import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '../pages/HomePage/HomePage';
import ImagePage from '../pages/ImagePage/ImagePage';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'HomePage'} component={HomePage} />
      <Stack.Screen name={'ImagePage'} component={ImagePage} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
