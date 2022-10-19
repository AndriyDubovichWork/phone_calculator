import { useState } from 'react';
import { StatusBar, Dimensions, SafeAreaView } from 'react-native';

import MainScreen from './components/ui/Screens/MainScreen/MainScreen';
import SettingsScreen from './components/ui/Screens/SettingsScreen/SettingsScreen';
import { useAsync } from 'react-async';
import { getImage } from './Storage/get/Img';
import { buttonStyles } from './Storage/get/buttonStyles';
import {
  setdefaultStyles,
  defaultButtonsStyles,
} from './Storage/set/defaultStyles';

const StatusBarHeight = StatusBar.currentHeight || 0;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
export const navbarHeight = screenHeight - windowHeight + StatusBarHeight;

export default function App() {
  setdefaultStyles();

  const [screen, setScreen] = useState('main');
  const img: any = useAsync({ promiseFn: getImage }).data;
  const buttonStyle: any =
    defaultButtonsStyles || useAsync({ promiseFn: buttonStyles }).data;

  const [SpecialData, setSpecialData] = useState({ img, buttonStyle });
  const main = (
    <MainScreen setScreen={setScreen} SpecialData={SpecialData} img={img} />
  );
  const settings = (
    <SettingsScreen
      img={img}
      setScreen={setScreen}
      SpecialData={SpecialData}
      setSpecialData={setSpecialData}
    />
  );
  let component = main;

  switch (screen) {
    case 'main':
      component = main;
      break;

    case 'settings':
      component = settings;
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
