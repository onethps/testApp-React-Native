import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomeScreen: undefined;
  ImageScreen: {
    id: string;
  };
};

export type ImagePageProps = NativeStackScreenProps<
  RootStackParamList,
  'ImageScreen'
>;

export type NavigationUseType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUseType>();
