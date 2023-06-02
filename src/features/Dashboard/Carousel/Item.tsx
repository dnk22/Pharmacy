import React from 'react';
import { Image } from 'react-native';

type ItemProps = {
  link: string;
};
export default function Item({ link }: ItemProps) {
  return <Image source={{ uri: link }} style={{ width: '100%', height: '100%' }} />;
}
