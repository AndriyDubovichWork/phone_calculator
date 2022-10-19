import { useState } from 'react';
import { StatusBar, Dimensions, SafeAreaView, Text } from 'react-native';

import MainScreen from './components/ui/Screens/MainScreen/MainScreen';
import { useAsync } from 'react-async';
import { getImage } from './Storage/get/Img';
import { buttonStyles } from './Storage/get/buttonStyles';
import Screens from './components/ui/Screens/Screens';
import { getMainColor } from './Storage/get/mainColor';
import { setdefaultStyles } from './Storage/set/defaultStyles';

const StatusBarHeight = StatusBar.currentHeight || 0;
export const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
export const navbarHeight = screenHeight - windowHeight + StatusBarHeight;

export default function App() {
  const img: any = useAsync({ promiseFn: getImage }).data;
  const MainColorObj: any = useAsync({ promiseFn: getMainColor });
  const MainColor: any = MainColorObj.data;

  const buttonStyleObj: any = useAsync({ promiseFn: buttonStyles });
  const buttonStyle = buttonStyleObj.data;

  if (!buttonStyle || !MainColor) {
    if (buttonStyleObj.isPending || MainColorObj.isPending) {
      return <Text>loading</Text>;
    } else {
      setdefaultStyles();
    }
  }

  return <Screens img={img} buttonStyle={buttonStyle} MainColor={MainColor} />;
}
