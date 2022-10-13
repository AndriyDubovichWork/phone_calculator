import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import LightGrayButton from '../../../ui/Buttons/LightGreyButton/LightGreyButton';
import OrangeButton from '../../../ui/Buttons/OrangeButton/OrangeButton';
import DarkGrayButton from '../../../ui/Buttons/DarkGreyButton/DarkGreyButton';
import calculate from '../../../../helpers/algo/calculate';

type FunctionsGridPropsType = {
  CalculateString: string;
  setCalculateString: React.Dispatch<React.SetStateAction<string>>;
  pushToString: (input: string) => void;

  showNumbersGrid: boolean;
  setShowNumbersGrid: React.Dispatch<React.SetStateAction<boolean>>;
};

const FunctionsGrid = ({
  showNumbersGrid,
  setShowNumbersGrid,
  CalculateString,
  setCalculateString,
  pushToString,
}: FunctionsGridPropsType) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <LightGrayButton onPress={() => setCalculateString('')} title='AC' />
        <LightGrayButton
          onPress={() => setShowNumbersGrid(!showNumbersGrid)}
          title='N'
        />
        <LightGrayButton
          onPress={() => setCalculateString(CalculateString.slice(0, -1))}
          title='<-'
        />
        <OrangeButton onPress={() => pushToString('√')} title='√' />
      </View>
      <View style={styles.row}>
        <DarkGrayButton onPress={() => pushToString('7')} title='7' />
        <DarkGrayButton onPress={() => pushToString('8')} title='8' />
        <DarkGrayButton onPress={() => pushToString('9')} title='9' />
        <OrangeButton onPress={() => pushToString('^')} title='^' />
      </View>
      <View style={styles.row}>
        <DarkGrayButton onPress={() => pushToString('4')} title='4' />
        <DarkGrayButton onPress={() => pushToString('5')} title='5' />
        <DarkGrayButton onPress={() => pushToString('6')} title='6' />
        <OrangeButton onPress={() => pushToString('3.14159265359')} title='π' />
      </View>
      <View style={styles.row}>
        <DarkGrayButton onPress={() => pushToString('1')} title='1' />
        <DarkGrayButton onPress={() => pushToString('2')} title='2' />
        <DarkGrayButton onPress={() => pushToString('3')} title='3' />
        <OrangeButton onPress={() => pushToString('2.71828')} title='e' />
      </View>
      <View style={styles.row}>
        <LightGrayButton onPress={() => pushToString('(')} title='(' />
        <DarkGrayButton onPress={() => pushToString('0')} title='0' />
        <LightGrayButton onPress={() => pushToString(')')} title=')' />

        <OrangeButton
          onPress={() => {
            setCalculateString(
              (
                Math.round(calculate(CalculateString) * 100000) / 100000
              ).toString()
            );
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
export default FunctionsGrid;
