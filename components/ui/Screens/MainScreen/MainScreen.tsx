import { View, ImageBackground } from 'react-native';
import ButtonsGrid from '../../../form/ButtonsGrid/ButtonsGrid';
import { useState } from 'react';

import { useAsync } from 'react-async';

import Input from '../../../form/Input/Input';
import storage from './../../../../Storage/Storage';

type MainScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  img: string;
};

export default function MainScreen({ setScreen, img }: MainScreenProps) {
  const [CalculateString, setCalculateString] = useState('');

  return (
    <View>
      <ImageBackground
        source={{ uri: img }}
        resizeMode='cover'
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Input CalculateString={CalculateString} setScreen={setScreen} />
        <ButtonsGrid
          CalculateString={CalculateString}
          setCalculateString={setCalculateString}
        />
      </ImageBackground>
    </View>
  );
}
