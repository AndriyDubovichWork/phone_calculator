import generateArray from './generateArray';
import postFixToRes from './postFixToRes';
import YardAlgotithm from './YardAlgotithm';

const calculate = (input: string) => {
  return postFixToRes(YardAlgotithm(generateArray(input)));
};
export default calculate;
