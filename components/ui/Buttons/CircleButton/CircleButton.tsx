import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
type CircleButtonProps = {
  onPress?: any;

  circleDiameter: number;
  isDouble?: boolean;
  onTop?: boolean;
  style: any;
  children: any;
};
const CircleButton = (props: CircleButtonProps) => {
  const [pressed, setPressed] = useState(false);

  let localStyles = styles(props, pressed);
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
        {props.children}
      </Pressable>
    </View>
  );
};

const styles = (props: any, pressed: boolean) =>
  StyleSheet.create({
    container: {
      flex: props.isDouble ? 2 : 1,
      width: props.circleDiameter,
      height: props.circleDiameter,
      // display: 'flex',
      // position: 'relative',
      // zIndex: 0,
    },
    button: {
      z: props.onTop ? 5 : 1,
      alignItems: 'center',
      justifyContent: props.isDouble ? 'center' : 'center',
      backgroundColor: props.style.backgroundColor,
      borderRadius: props.circleDiameter / 2,
      width: props.isDouble ? props.circleDiameter * 2 : props.circleDiameter,
      height: props.circleDiameter,
      opacity: pressed ? 0.6 : 1,
    },
  });
export default CircleButton;
