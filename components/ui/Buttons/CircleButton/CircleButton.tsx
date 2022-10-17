import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Dimensions, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { getButtonsStyles } from './../../../../Storage/Getters/getButtonsStyles';
import { setDefaultButtonsStyles } from '../../../../Storage/Setters/setDefaultStyles';
type CircleButtonProps = {
  onPress: any;

  backgroundColor: string;
  TextColor: string;
  Text: string;
  isDouble?: boolean;
};
const CircleButton = (props: CircleButtonProps) => {
  const [pressed, setPressed] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const buttonSize = (windowWidth / 100) * 22;
  // setDefaultButtonsStyles();

  // console.log(buttonsStyles);

  // let backgroundColor = '#123';
  // let color = '#fff';

  // if (buttonsStyles) {
  //   backgroundColor = buttonsStyles[props.type].backgroundColor;
  //   color = buttonsStyles[props.type].TextColor;
  // }
  let localStyles = styles(
    props,
    pressed,
    buttonSize,
    props.backgroundColor,
    props.TextColor
  );
  return (
    <View style={localStyles.container}>
      <Pressable
        onPress={props.onPress}
        onPressOut={() => {
          setPressed(false);
        }}
        onPressIn={() => {
          setPressed(true);
        }}
        style={[localStyles.button]}
      >
        <Text style={localStyles.Text}>{props.Text}</Text>
      </Pressable>
    </View>
  );
};

const styles = (
  props: any,
  pressed: boolean,
  buttonSize: number,
  backgroundColor: string,
  color: string
) =>
  StyleSheet.create({
    container: {
      flex: props.isDouble ? 2 : 1,

      width: buttonSize,
      height: buttonSize,
    },
    button: {
      alignItems: 'center',
      justifyContent: props.isDouble ? 'center' : 'center',

      backgroundColor,

      borderRadius: buttonSize / 2,

      width: props.isDouble ? buttonSize * 2 : buttonSize,
      height: buttonSize,

      opacity: pressed ? 0.6 : 1,
    },
    Text: {
      fontSize: RFPercentage(5),
      color,
    },
  });
export default CircleButton;
