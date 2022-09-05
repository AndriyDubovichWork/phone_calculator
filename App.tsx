import { View, StatusBar, Dimensions, Text, SafeAreaView } from 'react-native';
import calculate from './helpers/calculate';
import ButtonComponent from './components/ui/ButtonComponent/ButtonComponent';
import ButtonsGrid, {
  ButtonType,
} from './components/form/ButtonsGrid/ButtonsGrid';
import { useState } from 'react';
import Input from './components/form/Input/Input';
const StatusBarHeight = StatusBar.currentHeight || 0;
const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;
export const navbarHeight = screenHeight - windowHeight + StatusBarHeight;
export default function App() {
  const [CalculateString, setCalculateString] = useState('');

  const ButtonsData: ButtonType[] = [
    {
      onPress: () => {
        setCalculateString('');
      },
      color: '#A5A5A5',
      title: 'AC',
    },
    {
      onPress: () => {
        alert('+/-');
      },
      color: '#A5A5A5',
      title: '+/-',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString.slice(0, -1));
      },
      color: '#A5A5A5',
      title: '<-',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '/');
      },
      color: '#FE9E0B',
      title: '/',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '7');
      },
      color: '#333333',
      title: '7',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '8');
      },
      color: '#333333',
      title: '8',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '9');
      },
      color: '#333333',
      title: '9',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '*');
      },
      color: '#FE9E0B',
      title: 'x',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '4');
      },
      color: '#333333',
      title: '4',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '5');
      },
      color: '#333333',
      title: '5',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '6');
      },
      color: '#333333',
      title: '6',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '-');
      },
      color: '#FE9E0B',
      title: '-',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '1');
      },
      color: '#333333',
      title: '1',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '2');
      },
      color: '#333333',
      title: '2',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '3');
      },
      color: '#333333',
      title: '3',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '+');
      },
      color: '#FE9E0B',
      title: '+',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '0');
      },
      color: '#333333',
      title: '0',
    },
    {
      onPress: () => {
        setCalculateString(CalculateString + '.');
      },
      color: '#333333',
      title: '.',
    },
    {
      onPress: () => {
        setCalculateString(calculate(CalculateString));
      },
      color: '#FE9E0B',
      title: '=',
    },
  ];

  return (
    <View style={{ backgroundColor: '#000', width: '100%', height: '100%' }}>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBarHeight,
          marginBottom: 10,
          // paddingLeft: 5,
          // marginRight: 5,
          height: screenHeight,
          width: '100%',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        <Input CalculateString={CalculateString} />
        <ButtonsGrid ButtonProps={ButtonsData} />
      </SafeAreaView>
    </View>
  );
}
