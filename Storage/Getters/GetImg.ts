import * as SyncStorage from 'sync-storage';
import getValue from './../Operations/getValue';
export const getImage = async () => {
  return await getValue('backgroundImage');
};
