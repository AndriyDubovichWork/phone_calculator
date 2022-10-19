import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import calculate from '../../../../helpers/algo/calculate';
import CircleButton from '../../../ui/Buttons/CircleButton/CircleButton';

export type NumbersGridPropsType = {
  CalculateString: string;
  setCalculateString: React.Dispatch<React.SetStateAction<string>>;
  pushToString: (input: string) => void;

  showNumbersGrid: boolean;
  setShowNumbersGrid: React.Dispatch<React.SetStateAction<boolean>>;
  buttonStyle: any;
};

const NumbersGrid = ({
  showNumbersGrid,
  setShowNumbersGrid,
  CalculateString,
  setCalculateString,
  pushToString,
  buttonStyle,
}: NumbersGridPropsType) => {
  const data: any = [
    [
      {
        title: 'AC',
        style: buttonStyle[0],
        onPress: () => setCalculateString(''),
      },
      {
        title: 'F',
        style: buttonStyle[0],
        onPress: () => setShowNumbersGrid(!showNumbersGrid),
      },
      {
        title: '<-',
        style: buttonStyle[0],
        onPress: () => setCalculateString(CalculateString.slice(0, -1)),
      },
      {
        title: '÷',
        style: buttonStyle[2],
        onPress: () => pushToString('÷'),
      },
    ],
    [
      {
        title: '7',
        style: buttonStyle[1],
        onPress: () => pushToString('7'),
      },
      {
        title: '8',
        style: buttonStyle[1],
        onPress: () => pushToString('8'),
      },
      {
        title: '9',
        style: buttonStyle[1],
        onPress: () => pushToString('9'),
      },
      {
        title: 'x',
        style: buttonStyle[2],
        onPress: () => pushToString('x'),
      },
    ],
    [
      {
        title: '4',
        style: buttonStyle[1],
        onPress: () => pushToString('4'),
      },
      {
        title: '5',
        style: buttonStyle[1],
        onPress: () => pushToString('5'),
      },
      {
        title: '6',
        style: buttonStyle[1],
        onPress: () => pushToString('6'),
      },
      {
        title: '-',
        style: buttonStyle[2],
        onPress: () => pushToString('-'),
      },
    ],
    [
      {
        title: '1',
        style: buttonStyle[1],
        onPress: () => pushToString('1'),
      },
      {
        title: '2',
        style: buttonStyle[1],
        onPress: () => pushToString('2'),
      },
      {
        title: '3',
        style: buttonStyle[1],
        onPress: () => pushToString('3'),
      },
      {
        title: '+',
        style: buttonStyle[2],
        onPress: () => pushToString('+'),
      },
    ],
    [
      {
        isDouble: true,
        title: '0',
        style: buttonStyle[1],
        onPress: () => pushToString('0'),
      },
      {
        title: '.',
        style: buttonStyle[1],
        onPress: () => pushToString('.'),
      },
      {
        title: '=',
        style: buttonStyle[2],
        onPress: () =>
          setCalculateString(
            (
              Math.round(calculate(CalculateString) * 100000) / 100000
            ).toString()
          ),
      },
    ],
  ];
  return (
    <View style={styles.container}>
      {data.map((row: any) => {
        return (
          <View style={styles.row} key={row[0].title}>
            {row.map((Button: any) => {
              return (
                <CircleButton
                  key={Button.title}
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
