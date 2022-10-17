import * as SyncStorage from 'sync-storage';

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
  SyncStorage.set('buttons', defaultButtonStyle);
  SyncStorage.set('backgroundImage', '');
};
export const setDefaultButtonsStyles = () => {
  SyncStorage.set('buttons', defaultButtonStyle);
};
