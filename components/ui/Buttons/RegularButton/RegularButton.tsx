import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Pressable, Dimensions, Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
type RegularButtonProps = {
  onPress: any;

  ButtonsStyles: {
    TextColor: string;
    backgroundColor: string;
  };

  Text: string;
  isDouble?: boolean;
};
const RegularButton = (props: RegularButtonProps) => {
  const [pressed, setPressed] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const buttonSize = (windowWidth / 100) * 22;

  const { backgroundColor, TextColor } = props.ButtonsStyles;

  let localStyles = styles(
    props,
    pressed,
    buttonSize,

    backgroundColor,
    TextColor
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
  TextColor: string
) =>
  StyleSheet.create({
    container: {
      margin: 5,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',

      backgroundColor,

      borderRadius: 20,

      opacity: pressed ? 0.6 : 1,
    },
    Text: {
      fontSize: RFPercentage(5),
      color: TextColor,
    },
  });
export default RegularButton;
