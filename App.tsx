import { useState } from 'react';
import { StatusBar, Dimensions, SafeAreaView } from 'react-native';

import MainScreen from './components/ui/Screens/MainScreen/MainScreen';
import SettingsScreen from './components/ui/Screens/SettingsScreen/SettingsScreen';
import storage from './Storage/Storage';
import { useAsync } from 'react-async';
import { getImage } from './Storage/get/Img';
const StatusBarHeight = StatusBar.currentHeight || 0;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
export const navbarHeight = screenHeight - windowHeight + StatusBarHeight;

export default function App() {
  const [screen, setScreen] = useState('main');
  const img: any = useAsync({ promiseFn: getImage }).data;

  let component = <MainScreen setScreen={setScreen} img={img} />;

  switch (screen) {
    case 'main':
      component = <MainScreen setScreen={setScreen} img={img} />;
      break;

    case 'settings':
      component = <SettingsScreen setScreen={setScreen} img={img} />;
      break;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,

        height: screenHeight,
        width: '100%',
        position: 'relative',
        backgroundColor: '#000',
      }}
    >
      {component}
    </SafeAreaView>
  );
}
