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
import NumbersGrid from '../NumbersGrid/NumbersGrid';
import FunctionsGrid from '../FunctionsGrid/FunctionsGrid';

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

  const [showNumbersGrid, setShowNumbersGrid] = useState(true);
  return (
    <>
      {showNumbersGrid ? (
        <NumbersGrid
          showNumbersGrid={showNumbersGrid}
          setShowNumbersGrid={setShowNumbersGrid}
          CalculateString={CalculateString}
          setCalculateString={setCalculateString}
          pushToString={pushToString}
        />
      ) : (
        <FunctionsGrid
          showNumbersGrid={showNumbersGrid}
          setShowNumbersGrid={setShowNumbersGrid}
          CalculateString={CalculateString}
          setCalculateString={setCalculateString}
          pushToString={pushToString}
        />
      )}
    </>
  );
};

export default ButtonsGrid;
