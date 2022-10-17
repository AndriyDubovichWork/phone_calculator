import * as SyncStorage from 'sync-storage';
import setValue from './../Operations/setValue';

const defaultButtonStyle = [
  {
    TextColor: '#000',
    backgroundColor: '#A5A5A5',
  },
  {
    TextColor: '#fff',
    backgroundColor: '#333333',
  },
  {
    TextColor: '#fff',
    backgroundColor: '#FE9E0B',
  },
];

export const setDefaultAllStyles = () => {
  setValue('buttons', defaultButtonStyle);
  setValue('backgroundImage', '');
};
export const setDefaultButtonsStyles = () => {
  setValue('buttons', defaultButtonStyle);
};
