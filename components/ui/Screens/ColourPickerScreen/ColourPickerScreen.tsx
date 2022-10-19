import { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import { setButtonStyles } from '../../../../Storage/set/buttonStyles';
import { setMainColor } from '../../../../Storage/set/mainColor';

type ColourPickerScreenPropsType = {
  setSpecialData: React.Dispatch<
    React.SetStateAction<{
      img: any;
      buttonStyle: any;
    }>
  >;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  setMainColorFunc: React.Dispatch<React.SetStateAction<string>>;
  SpecialData: {
    img: any;
    buttonStyle: any;
  };
  SelectedStyleChanger: {
    type: string;
    id: number;
  };
  MainColor: any;
};

const ColourPickerScreen = ({
  SpecialData,
  setSpecialData,
  SelectedStyleChanger,
  setScreen,
  setMainColorFunc,
  MainColor,
}: ColourPickerScreenPropsType) => {
  let SpecialDataCopy = { ...SpecialData };
  const [color, setColor] = useState(
    SelectedStyleChanger.type === 'MainColor'
      ? MainColor
      : SpecialData.buttonStyle[SelectedStyleChanger.id].backgroundColor
  );
  return (
    <SafeAreaView
      style={{
        flex: 1,

        width: '100%',
        height: '100%',
        // position: 'relative',
        backgroundColor: '#000',
      }}
    >
      <ColorPicker color={color} onColorChange={(cl: string) => setColor(cl)} />
      <Button
        title='save'
        onPress={() => {
          switch (SelectedStyleChanger.type) {
            case 'backgroundColor':
              SpecialDataCopy.buttonStyle[
                SelectedStyleChanger.id
              ].backgroundColor = color;
              setSpecialData(SpecialDataCopy);
              setButtonStyles(SpecialDataCopy.buttonStyle);
              setScreen('settings');

              break;
            case 'TextColor':
              SpecialDataCopy.buttonStyle[SelectedStyleChanger.id].TextColor =
                color;
              setSpecialData(SpecialDataCopy);
              setButtonStyles(SpecialDataCopy.buttonStyle);
              setScreen('settings');
              break;
            case 'MainColor':
              //for rerender
              setSpecialData(SpecialDataCopy);
              //actual logic
              setMainColorFunc(color);
              setMainColor(color);
              setScreen('settings');
              break;
          }
        }}
      />
    </SafeAreaView>
  );
};

export default ColourPickerScreen;
