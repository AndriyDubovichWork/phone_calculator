import React from 'react';
import { View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
type CircleButtonProps = {
  onPress?: any;
  onPressOut?: any;
  onPressIn?: any;
  circleDiameter: number;
  isDouble?: boolean;
  onTop?: boolean;
  style: any;
  children: any;
};
const CircleButton = (props: CircleButtonProps) => {
  let localStyles = styles(props);

  return (
    <View style={localStyles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={[localStyles.button]}
        onPress={props.onPress}
        onPressOut={props.onPressOut}
        onPressIn={props.onPressIn}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

const styles = (props: any) =>
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
    },
  });
export default CircleButton;
