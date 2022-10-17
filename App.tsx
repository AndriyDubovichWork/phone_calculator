import { useState } from 'react';
import { StatusBar, Dimensions, SafeAreaView } from 'react-native';

import MainScreen from './components/ui/Screens/MainScreen/MainScreen';
import SettingsScreen from './components/ui/Screens/SettingsScreen/SettingsScreen';
import { InitStorage } from './Storage/Storage';
import { useAsync } from 'react-async';

const StatusBarHeight = StatusBar.currentHeight || 0;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
export const navbarHeight = screenHeight - windowHeight + StatusBarHeight;

const App = async () => {
  const res = useAsync({ promiseFn: InitStorage });
  console.log(res);
  const [screen, setScreen] = useState('main');

  let component = <MainScreen setScreen={setScreen} />;

  switch (screen) {
    case 'main':
      component = <MainScreen setScreen={setScreen} />;
      break;

    case 'settings':
      component = <SettingsScreen setScreen={setScreen} />;
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
};
export default App;
