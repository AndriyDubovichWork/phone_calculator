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
const DarkGrayButtonComponent = ({ title, onPress, color }: ButtonCProps) => {
  return (
    <Pressable style={style.DarkGrayButton} onPress={onPress}>
      <Text style={style.WhiteText}>{title}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  DarkGrayButton: {
    flex: 1,
    width: buttonSize,
    height: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    color: '#fff',
    borderRadius: 100,
    marginTop: '5%',
    marginRight: 5,
  },

  WhiteText: {
    color: '#fff',
    fontSize: RFPercentage(5),
  },
});
export default DarkGrayButtonComponent;
