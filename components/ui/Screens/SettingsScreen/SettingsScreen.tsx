import { View, Text, ImageBackground } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from './../../ImagePicker/ImagePicker';
import storage from './../../../../Storage/Storage';
type SettingsScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  img: string;
  setSpecialData: React.Dispatch<
    React.SetStateAction<{
      img: any;
      buttonStyle: any;
    }>
  >;
  SpecialData: {
    img: any;
    buttonStyle: any;
  };
};

export default function SettingsScreen({
  setScreen,
  img,
  setSpecialData,
  SpecialData,
}: SettingsScreenProps) {
  return (
    <View
      style={{
        flex: 1,

        height: '100%',
        width: '100%',
      }}
    >
      <ImageBackground
        source={{ uri: SpecialData.img || img }}
        resizeMode='cover'
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <Icon
          name='arrowleft'
          color={'#fff'}
          style={{ margin: 20 }}
          size={40}
          onPress={() => {
            setScreen('main');
          }}
        />

        <ImagePicker
          setImage={(img: string) => {
            storage.save({ key: 'backgroundImage', data: img });
            setSpecialData({ ...SpecialData, img });
          }}
        />
      </ImageBackground>
    </View>
  );
}
