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
const ButtonComponent = ({ title, onPress, color }: ButtonCProps) => {
  let ButtonStyle: any = style.GrayButton;
  let TextStyle = style.WhiteText;
  switch (color) {
    case '#A5A5A5':
      ButtonStyle = style.LightGrayButton;
      TextStyle = style.BlackText;
      break;
    case '#FE9E0B':
      ButtonStyle = style.OrangeButton;
      TextStyle = style.WhiteText;
      break;
    case '#333333':
      ButtonStyle = style.GrayButton;
      TextStyle = style.WhiteText;
      break;
  }
  if (title === '.') {
    ButtonStyle = style.SmallGrayButton;
  }
  if (title === '=') {
    ButtonStyle = style.SmallOrangeButton;
  }
  return (
    <Pressable
      style={title === '0' ? style.DoubleButton : ButtonStyle}
      onPress={onPress}
    >
      <Text style={TextStyle}>{title}</Text>
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
  OrangeButton: {
    flex: 1,
    width: buttonSize,
    height: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE9E0B',
    color: '#fff',
    borderRadius: 100,
    marginTop: '5%',
    marginRight: 0,
  },
  GrayButton: {
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
  SmallOrangeButton: {
    flex: 1,
    width: buttonSize,
    height: buttonSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE9E0B',
    color: '#fff',
    borderRadius: 100,
    marginTop: '5%',
    marginRight: 0,
  },
  SmallGrayButton: {
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
  WhiteText: {
    color: '#fff',
    fontSize: RFPercentage(5),
  },
  BlackText: {
    color: '#000',
    fontSize: RFPercentage(5),
  },
});
export default ButtonComponent;
