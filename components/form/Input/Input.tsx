import { Text, View } from 'react-native';

type InputProps = {
  CalculateString: string;
};

const Input = ({ CalculateString }: InputProps) => {
  return (
    <View style={{ height: '30%', width: '100%', position: 'relative' }}>
      <Text
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          fontSize: 40,
          color: '#fff',
        }}
      >
        {CalculateString}
      </Text>
    </View>
  );
};

export default Input;
