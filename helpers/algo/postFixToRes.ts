import IsOperator from './IsOperator';
import Operate from './Operate';

const postFixToRes = (postFix: any[]) => {
  let stack: any[] = [];
  let error = '';
  postFix.map((elem) => {
    if (typeof elem === 'number') {
      stack.push(elem);
    } else {
      const res = Operate(
        stack[stack.length - 2],
        stack[stack.length - 1],
        elem
      );

      if (typeof res === 'string' && !IsOperator(res)) {
        error = res;
      } else {
        stack.pop();
        stack.pop();

        stack.push(res);
      }
    }
  });
  if (error) {
    return error;
  } else {
    return stack[0];
  }
};

export default postFixToRes;
