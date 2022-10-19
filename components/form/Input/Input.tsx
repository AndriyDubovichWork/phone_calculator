import { ScrollView, Image, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
type InputProps = {
  CalculateString: string;
  MainColor: any;
  setScreen: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ CalculateString, setScreen, MainColor }: InputProps) => {
  return (
    <View
      style={{
        width: '100%',
        height: '40%',

        position: 'relative',
      }}
    >
      <Icon
        name='setting'
        color={MainColor}
        size={35}
        onPress={() => {
          setScreen('settings');
        }}
        style={{ position: 'absolute', right: 10, top: 20 }}
      />
      <Text
        style={{
          textAlign: 'right',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          right: 0,
          color: MainColor,
          fontSize: RFPercentage(6),
        }}
      >
        {CalculateString}
      </Text>
    </View>
  );
};

export default Input;
