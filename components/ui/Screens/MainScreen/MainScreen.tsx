import { View, ImageBackground } from 'react-native';
import ButtonsGrid from '../../../form/ButtonsGrid/ButtonsGrid';
import { useState } from 'react';

import Input from '../../../form/Input/Input';
import { getImage } from './../../../../Storage/Getters/GetImg';

type MainScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

export default function MainScreen({ setScreen }: MainScreenProps) {
  const [CalculateString, setCalculateString] = useState('');

  const img: any = getImage();

  console.log(img);
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
