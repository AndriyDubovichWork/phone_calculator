import { NumbersGridPropsType } from '../components/form/ButtonsGrid/NumbersGrid/NumbersGrid';
import calculate from '../helpers/algo/calculate';

export const FormulasGrid = (
  {
    showNumbersGrid,
    setShowNumbersGrid,
    CalculateString,
    setCalculateString,
    pushToString,
  }: NumbersGridPropsType,
  buttonStyle: any
) => {
  return [
    [
      {
        title: 'AC',
        style: buttonStyle[0],
        onPress: () => setCalculateString(''),
      },
      {
        title: 'N',
        style: buttonStyle[0],
        onPress: () => setShowNumbersGrid(!showNumbersGrid),
      },
      {
        title: '<-',
        style: buttonStyle[0],
        onPress: () => setCalculateString(CalculateString.slice(0, -1)),
      },
      {
        title: '√',
        style: buttonStyle[2],
        onPress: () => pushToString('√'),
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
        title: '^',
        style: buttonStyle[2],
        onPress: () => pushToString('^'),
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
        title: 'π',
        style: buttonStyle[2],
        onPress: () => pushToString('3.141592'),
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
        title: 'e',
        style: buttonStyle[2],
        onPress: () => pushToString('2.71828'),
      },
    ],
    [
      {
        title: '(',
        style: buttonStyle[0],
        onPress: () => pushToString('('),
      },
      {
        title: '0',
        style: buttonStyle[1],
        onPress: () => pushToString('0'),
      },
      {
        title: ')',
        style: buttonStyle[0],
        onPress: () => pushToString(')'),
      },
      {
        title: '=',
        style: buttonStyle[2],
        onPress: setCalculateString(
          (Math.round(calculate(CalculateString) * 100000) / 100000).toString()
        ),
      },
    ],
  ];
};
