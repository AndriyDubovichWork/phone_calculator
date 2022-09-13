import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
type ButtonCProps = {
  title: string;
  onPress: any;
  color: string;
};

const windowWidth = Dimensions.get('window').width;
const buttonSize = (windowWidth / 100) * 20;
const LightGrayButtonComponent = ({ title, onPress, color }: ButtonCProps) => {
  return (
    <Pressable style={style.LightGrayButton} onPress={onPress}>
      <Text style={style.BlackText}>{title}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  LightGrayButton: {
    flex: 1,
    width: buttonSize,
    height: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A5A5A5',
    color: '#000',
    borderRadius: 100,
    marginTop: '5%',
    marginRight: 5,
  },

  BlackText: {
    color: '#000',
    fontSize: RFPercentage(5),
  },
});
export default LightGrayButtonComponent;
