import storage from './../Storage';

const defaultButtonsStyles = [
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
  storage.save({ key: 'buttonStyles', data: defaultButtonsStyles });
  storage.save({ key: 'backgroundImage', data: '' });
};
