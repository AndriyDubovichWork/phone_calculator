import storage from './../Storage';
import { setImg } from './img';
import { setButtonStyles } from './buttonStyles';
import { setMainColor } from './mainColor';

export const defaultButtonsStyles = [
  {
    name: 'technical',
    TextColor: '#000',
    backgroundColor: '#A5A5A5',
  },
  {
    name: 'numbers',
    TextColor: '#fff',
    backgroundColor: '#333333',
  },
  {
    name: 'operators',
    TextColor: '#fff',
    backgroundColor: '#FE9E0B',
  },
];

export const setdefaultStyles = () => {
  setButtonStyles(defaultButtonsStyles);
  setMainColor('#fff');
};
