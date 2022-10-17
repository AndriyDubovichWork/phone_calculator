import * as SyncStorage from 'sync-storage';
import getValue from './../Operations/getValue';

export const getButtonsStyles: any = () => {
  return [
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
  getValue('buttons');
};
