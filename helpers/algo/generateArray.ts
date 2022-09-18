import IsOperator from './IsOperator';

const generateArray = (Originalinp: string): any[] => {
  if (Originalinp === '') {
    return [''];
  }
  console.log(typeof Originalinp);
  const inp = Originalinp.replace(/ /g, '');

  let resArr = [];
  let num = '';
  for (let i = 0; i < inp.length; i++) {
    if (inp[i] === '0') {
      num += inp[i];
    } else if (parseFloat(inp[i]) || inp[i] === '.') {
      num += inp[i];
    } else {
      // if (inp[i] === '(' || inp[i] === ')') {
      //   resArr.push(inp[i]);
      // } else if (num !== null) {
      if (num) {
        resArr.push(num);
      }
      resArr.push(inp[i]);

      num = '';
      // }
    }
  }
  if (typeof parseFloat(num) === 'number' && num !== '') {
    resArr.push(num);
  }

  resArr = resArr.map((elem) => {
    if (parseFloat(elem) === 0) {
      return parseFloat(elem);
    }
    if (parseFloat(elem)) {
      return parseFloat(elem);
    } else {
      return elem;
    }
  });
  if (resArr[0] === '-') {
    resArr.unshift(0);
  }
  return resArr;
};
export default generateArray;
