import { SafeAreaView } from 'react-native';
import { TriangleColorPicker } from 'react-native-color-picker';
import { setButtonStyles } from '../../../../Storage/set/buttonStyles';

type ColourPickerScreenPropsType = {
  setSpecialData: React.Dispatch<
    React.SetStateAction<{
      img: any;
      buttonStyle: any;
    }>
  >;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
  SpecialData: {
    img: any;
    buttonStyle: any;
  };
  SelectedStyleChanger: {
    type: string;
    id: number;
  };
};

const ColourPickerScreen = ({
  SpecialData,
  setSpecialData,
  SelectedStyleChanger,
  setScreen,
}: ColourPickerScreenPropsType) => {
  let SpecialDataCopy = { ...SpecialData };

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
      {SelectedStyleChanger.type === 'backgroundColor' ? (
        <TriangleColorPicker
          onColorSelected={(color) => {
            SpecialDataCopy.buttonStyle[
              SelectedStyleChanger.id
            ].backgroundColor = color;
            setSpecialData(SpecialDataCopy);
            setButtonStyles(SpecialDataCopy.buttonStyle);
            setScreen('settings');
          }}
          defaultColor={
            SpecialData.buttonStyle[SelectedStyleChanger.id].backgroundColor
          }
          style={{ flex: 1 }}
        />
      ) : (
        <TriangleColorPicker
          onColorSelected={(color) => {
            SpecialDataCopy.buttonStyle[SelectedStyleChanger.id].TextColor =
              color;
            setSpecialData(SpecialDataCopy);
            setButtonStyles(SpecialDataCopy.buttonStyle);
            setScreen('settings');
          }}
          defaultColor={
            SpecialData.buttonStyle[SelectedStyleChanger.id].TextColor
          }
          style={{ flex: 1 }}
        />
      )}
    </SafeAreaView>
  );
};

export default ColourPickerScreen;
