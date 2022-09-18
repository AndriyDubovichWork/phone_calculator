import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const CircleButton = (props: any) => {
  let localStyles = styles(props);

  return (
    <View style={localStyles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[localStyles.button]}
        onPress={props.onPress}
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
      alignItems: 'center',
      justifyContent: props.isDouble ? 'center' : 'center',
      backgroundColor: props.style.backgroundColor,
      borderRadius: props.circleDiameter / 2,
      width: props.isDouble ? props.circleDiameter * 2 : props.circleDiameter,
      height: props.circleDiameter,
    },
  });
export default CircleButton;
