import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CircleButton from '../CircleButton/CircleButton';
type ButtonCProps = {
  title: string;
  onPress?: any;
  onPressIn?: any;
  onPressOut?: any;
};

const windowWidth = Dimensions.get('window').width;
const buttonSize = (windowWidth / 100) * 22;
const LightGrayButtonComponent = ({
  title,
  onPress,
  onPressOut,
  onPressIn,
}: ButtonCProps) => {
  return (
    <CircleButton
      // isDouble
      circleDiameter={buttonSize}
      style={style.Button}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Text style={style.Text}>{title}</Text>
    </CircleButton>
  );
};

const style = StyleSheet.create({
  Button: {
    flex: 1,

    backgroundColor: '#A5A5A5',
    '&:hover': {
      backgroundColor: '#000',
    },
  },

  Text: {
    color: '#000',
    fontSize: RFPercentage(5),
  },
});
export default LightGrayButtonComponent;
