import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import LightGrayButton from '../../../ui/Buttons/LightGreyButton/LightGreyButton';
import OrangeButton from '../../../ui/Buttons/OrangeButton/OrangeButton';
import DarkGrayButton from '../../../ui/Buttons/DarkGreyButton/DarkGreyButton';
import DoubleButton from './../../../ui/Buttons/DoubleButton/DoubleButton';
import calculate from '../../../../helpers/algo/calculate';
import NumbersGridData from './../../../../ButtonsGrids/NumbersGrid';
import CircleButton from '../../../ui/Buttons/CircleButton/CircleButton';

export type NumbersGridPropsType = {
  CalculateString: string;
  setCalculateString: React.Dispatch<React.SetStateAction<string>>;
  pushToString: (input: string) => void;

  showNumbersGrid: boolean;
  setShowNumbersGrid: React.Dispatch<React.SetStateAction<boolean>>;
  buttonStyle: any;
};

const NumbersGrid = (props: NumbersGridPropsType) => {
  const data: any = NumbersGridData(props);
  console.log(data);
  return (
    <View style={styles.container}>
      {data.map((row: any) => {
        return (
          <View style={styles.row}>
            {row.map((Button: any) => {
              return (
                <CircleButton
                  onPress={Button.onPress}
                  ButtonsStyles={Button.style}
                  Text={Button.title}
                  isDouble={Button.isDouble}
                />
              );
            })}
          </View>
        );
      })}
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
export default NumbersGrid;
