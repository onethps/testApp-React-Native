import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomePage: undefined;
  ImagePage: {
    id: string;
  };
};

export type ImagePageProps = NativeStackScreenProps<
  RootStackParamList,
  'ImagePage'
>;

export type NavigationUseType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUseType>();
