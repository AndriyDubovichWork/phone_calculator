import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import LightGrayButton from '../../ui/LightGreyButton/LightGreyButton';
import OrangeButton from '../../ui/OrangeButton/OrangeButton';
import DarkGrayButton from '../../ui/DarkGreyButton/DarkGreyButton';
import DoubleButton from './../../ui/DoubleButton/DoubleButton';
import calculate from '../../../helpers/algo/calculate';
import IsOperator from '../../../helpers/algo/IsOperator';
import Draggable from 'react-native-draggable';
import DraggeableButton from './../../ui/DraggeableButton/DraggeableButton';
// const Swipeable = require('react-native-swipeable');
type ButtonsGridPropsType = {
  CalculateString: string;
  setCalculateString: React.Dispatch<React.SetStateAction<string>>;
};
export type ButtonType = {
  onPress: any;
  title: string;
};

const ButtonsGrid = ({
  CalculateString,
  setCalculateString,
}: ButtonsGridPropsType) => {
  const pushToString = (input: string) => {
    if (CalculateString === 'NaN' || CalculateString === 'cant divide by 0') {
      setCalculateString(input);
    } else if (
      input === '.' &&
      CalculateString[CalculateString.length - 1] === '.'
    ) {
      return;
    } else if (
      IsOperator(input) &&
      IsOperator(CalculateString[CalculateString.length - 1])
    ) {
      let str = CalculateString.slice(0, -1);
      str += input;
      setCalculateString(str);
    } else {
      setCalculateString(CalculateString + input);
    }
  };
  const windowWidth = Dimensions.get('window').width;
  const buttonSize = (windowWidth / 100) * 22;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* {showCurles ? (
          <LightGrayButton onPress={() => pushToString('(')} title='(' />
        ) : (
        )} */}
        <LightGrayButton onPress={() => setCalculateString('')} title='AC' />
        <View style={{ flex: 1 }}>
          <DraggeableButton onSwipe={pushToString} />
        </View>

        <LightGrayButton
          onPress={() => setCalculateString(CalculateString.slice(0, -1))}
          title='<-'
        />
        {/* {showCurles ? (
          <LightGrayButton onPress={() => pushToString(')')} title=')' />
        ) : (
          
        )} */}
        <OrangeButton onPress={() => pushToString('÷')} title='÷' />
      </View>
      <View style={styles.row}>
        <DarkGrayButton onPress={() => pushToString('7')} title='7' />
        <DarkGrayButton onPress={() => pushToString('8')} title='8' />
        <DarkGrayButton onPress={() => pushToString('9')} title='9' />
        <OrangeButton onPress={() => pushToString('x')} title='x' />
      </View>
      <View style={styles.row}>
        <DarkGrayButton onPress={() => pushToString('4')} title='4' />
        <DarkGrayButton onPress={() => pushToString('5')} title='5' />
        <DarkGrayButton onPress={() => pushToString('6')} title='6' />
        <OrangeButton onPress={() => pushToString('-')} title='-' />
      </View>
      <View style={styles.row}>
        <DarkGrayButton onPress={() => pushToString('1')} title='1' />
        <DarkGrayButton onPress={() => pushToString('2')} title='2' />
        <DarkGrayButton onPress={() => pushToString('3')} title='3' />
        <OrangeButton onPress={() => pushToString('+')} title='+' />
      </View>
      <View style={styles.row}>
        <DoubleButton onPress={() => pushToString('0')} title='0' />

        <DarkGrayButton onPress={() => pushToString('.')} title='.' />

        <OrangeButton
          onPress={() => {
            setCalculateString(calculate(CalculateString).toString());
          }}
          title='='
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  row: {
    marginTop: '1%',
    marginBottom: '1%',
    flexDirection: 'row',
  },
});
export default ButtonsGrid;
