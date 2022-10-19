import React, { useState } from 'react';
import ColourPickerScreen from './ColourPickerScreen/ColourPickerScreen';

import { SafeAreaView } from 'react-native';
import MainScreen from './MainScreen/MainScreen';
import SettingsScreen from './SettingsScreen/SettingsScreen';
import { screenHeight } from './../../../App';

type ScreensPropsType = {
  img: string;
  buttonStyle: any;
};

const Screens = ({ img, buttonStyle }: ScreensPropsType) => {
  const [SpecialData, setSpecialData] = useState({
    img,
    buttonStyle,
  });
  const [SelectedStyleChanger, setSelectedStyleChanger] = useState({
    type: 'backgroundColor',
    id: 0,
  });
  const [screen, setScreen] = useState('main');
  const main = (
    <MainScreen setScreen={setScreen} SpecialData={SpecialData} img={img} />
  );
  const settings = (
    <SettingsScreen
      img={img}
      setScreen={setScreen}
      SpecialData={SpecialData}
      setSpecialData={setSpecialData}
      setSelectedStyleChanger={setSelectedStyleChanger}
    />
  );
  const colourPicker = (
    <ColourPickerScreen
      SpecialData={SpecialData}
      setSpecialData={setSpecialData}
      SelectedStyleChanger={SelectedStyleChanger}
      setScreen={setScreen}
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
    case 'colourPicker':
      component = colourPicker;
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

export default Screens;
