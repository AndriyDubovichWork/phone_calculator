const Operate = (num1: number, num2: number, operator: string) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '÷':
      if (num1 === 0) {
        return 0;
      } else if (num2 === 0) {
        return 'cant divide by 0';
      } else {
        return num1 / num2;
      }
    case 'x':
      return num1 * num2;
    case '^':
      return Math.pow(num1, num2);
    case '√':
      return Math.pow(num2, 1 / num1);
  }
};
export default Operate;
