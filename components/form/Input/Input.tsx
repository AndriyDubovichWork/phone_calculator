import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

type InputProps = {
  CalculateString: string;
};

const Input = ({ CalculateString }: InputProps) => {
  return (
    <View
      style={{
        height: '30%',
        width: '100%',
        position: 'relative',
      }}
    >
      <Text
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          padding: '5%',
          color: '#fff',
          textAlign: 'right',
          fontSize: RFPercentage(6),
        }}
      >
        {CalculateString}
      </Text>
    </View>
  );
};

export default Input;
