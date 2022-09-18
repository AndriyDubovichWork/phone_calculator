import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CircleButton from '../CircleButton/CircleButton';
type ButtonCProps = {
  title: string;
  onPress: any;
};

const windowWidth = Dimensions.get('window').width;
const buttonSize = (windowWidth / 100) * 22;
const DoubleButton = ({ title, onPress }: ButtonCProps) => {
  return (
    <CircleButton
      isDouble
      circleDiameter={buttonSize}
      style={style.Button}
      onPress={onPress}
    >
      <Text style={style.Text}>{title}</Text>
    </CircleButton>
  );
};

const style = StyleSheet.create({
  Button: {
    flex: 2,
    backgroundColor: '#333333',
  },

  Text: {
    color: '#fff',
    fontSize: RFPercentage(5),
  },
});
export default DoubleButton;
