import { View, Text, ImageBackground, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ImagePicker from './../../ImagePicker/ImagePicker';
import { setImg } from '../../../../Storage/set/img';
import CircleButton from '../../Buttons/CircleButton/CircleButton';
import {
  defaultButtonsStyles,
  setdefaultStyles,
} from '../../../../Storage/set/defaultStyles';
import RegularButton from '../../Buttons/RegularButton/RegularButton';

type SettingsScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  MainColor: string;
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
  setSelectedStyleChanger: React.Dispatch<
    React.SetStateAction<{
      type: string;
      id: number;
    }>
  >;
};

export default function SettingsScreen({
  setScreen,
  img,
  setSpecialData,
  SpecialData,
  setSelectedStyleChanger,
  MainColor,
}: SettingsScreenProps) {
  const ButtonsArray = [
    { id: 0, type: 'Technical', text: 'AC' },
    { id: 1, type: 'Numbers', text: '1' },
    { id: 2, type: 'Operations', text: '+' },
  ];
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
          color={MainColor}
          style={{ margin: 20 }}
          size={40}
          onPress={() => {
            setScreen('main');
          }}
        />

        <ImagePicker
          setImage={(img: string) => {
            setImg(img);
            setSpecialData({ ...SpecialData, img });
          }}
        />
        {ButtonsArray.map(({ id, type, text }) => {
          return (
            <View style={{ flex: 1, flexDirection: 'row' }} key={text}>
              <Text
                style={{ color: MainColor, fontSize: 20, alignSelf: 'center' }}
              >
                {type}
              </Text>
              <View
                style={{
                  flex: 3,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <CircleButton
                  Text={text}
                  onPress={() => {}}
                  ButtonsStyles={SpecialData.buttonStyle[id]}
                />
                <CircleButton
                  ButtonsStyles={{
                    name: 'any',
                    TextColor: '#fff',
                    backgroundColor: '#000',
                  }}
                  Text='BG'
                  onPress={() => {
                    setSelectedStyleChanger({ type: 'backgroundColor', id });
                    setScreen('colourPicker');
                  }}
                />
                <CircleButton
                  ButtonsStyles={{
                    name: 'any',
                    TextColor: '#fff',
                    backgroundColor: '#000',
                  }}
                  Text='TXT'
                  onPress={() => {
                    setSelectedStyleChanger({ type: 'TextColor', id });
                    setScreen('colourPicker');
                  }}
                />
              </View>
            </View>
          );
        })}

        <Button
          title='Change Main colour'
          onPress={() => {
            setSelectedStyleChanger({ type: 'MainColor', id: 0 });

            setScreen('colourPicker');
          }}
        />
        <Button
          title='set Default styles'
          onPress={() => {
            let SpecialDataCopy = { ...SpecialData };
            SpecialDataCopy.buttonStyle = defaultButtonsStyles;
            setSpecialData(SpecialDataCopy);
            setdefaultStyles();
          }}
        />
      </ImageBackground>
    </View>
  );
}
