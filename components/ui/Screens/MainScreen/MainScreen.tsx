import { View, ImageBackground } from 'react-native';
import ButtonsGrid from '../../../form/ButtonsGrid/ButtonsGrid';
import { useState } from 'react';

import Input from '../../../form/Input/Input';
import storage from './../../../../Storage/Storage';

type MainScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  img: string;
  SpecialData: {
    img: any;
    buttonStyle: any;
  };
};

export default function MainScreen({
  setScreen,
  SpecialData,
  img,
}: MainScreenProps) {
  const [CalculateString, setCalculateString] = useState('');
  return (
    <View>
      <ImageBackground
        source={{ uri: SpecialData.img || img }}
        resizeMode='cover'
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Input CalculateString={CalculateString} setScreen={setScreen} />
        <ButtonsGrid
          buttonStyle={SpecialData.buttonStyle}
          CalculateString={CalculateString}
          setCalculateString={setCalculateString}
        />
      </ImageBackground>
    </View>
  );
}
