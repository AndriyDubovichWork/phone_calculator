import * as SyncStorage from 'sync-storage';
import getValue from './../Operations/getValue';
export const getImage = () => {
  return getValue('backgroundImage');
};
