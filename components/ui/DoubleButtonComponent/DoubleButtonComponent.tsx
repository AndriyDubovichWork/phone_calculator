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
const buttonSize = (windowWidth / 100) * 40;
const DoubleButtonComponent = ({ title, onPress, color }: ButtonCProps) => {
  return (
    <Pressable style={style.DoubleButton} onPress={onPress}>
      <Text style={style.WhiteText}>{title}</Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  DoubleButton: {
    // flex: 1,
    height: buttonSize,
    width: buttonSize * 2.4,
    justifyContent: 'center',
    paddingLeft: '10%',
    backgroundColor: '#333333',
    borderRadius: 100,
    marginTop: '5%',
    marginRight: 5,
  },

  WhiteText: {
    color: '#fff',
    fontSize: RFPercentage(5),
  },
});
export default DoubleButtonComponent;
