import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HOME, ITEM_DETAIL, PAYMENT } from './constants';

export type RootStackParamList = {
  [HOME]: undefined;
  [PAYMENT]: undefined;
  [ITEM_DETAIL]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  T
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
