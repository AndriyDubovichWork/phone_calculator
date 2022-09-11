const IsOperator = (element: string) => {
  if (
    element === '+' ||
    element === '-' ||
    element === 'x' ||
    element === '÷' ||
    element === '^' ||
    element === '√'
  ) {
    return element;
  } else {
    return false;
  }
};
export default IsOperator;
