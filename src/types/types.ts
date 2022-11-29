import {NavigationProp, useNavigation} from '@react-navigation/native';

export type RootStackParamList = {
  HomePage: undefined;
  ImagePage: undefined;
};

export type NavigationUseType = NavigationProp<RootStackParamList>;
export const useAppNavigation = () => useNavigation<NavigationUseType>();
