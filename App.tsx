import { useState } from 'react';
import { StatusBar, Dimensions, SafeAreaView, Text } from 'react-native';

import MainScreen from './components/ui/Screens/MainScreen/MainScreen';
import { useAsync } from 'react-async';
import { getImage } from './Storage/get/Img';
import { buttonStyles } from './Storage/get/buttonStyles';
import Screens from './components/ui/Screens/Screens';

const StatusBarHeight = StatusBar.currentHeight || 0;
export const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
export const navbarHeight = screenHeight - windowHeight + StatusBarHeight;

export default function App() {
  // setdefaultStyles();

  const img: any = useAsync({ promiseFn: getImage }).data;
  const buttonStyle: any = useAsync({ promiseFn: buttonStyles }).data;
  if (!buttonStyle) {
    return <Text>loading</Text>;
  }

  return <Screens img={img} buttonStyle={buttonStyle} />;
}
