import * as SyncStorage from 'sync-storage';
export const getImage = () => {
  return SyncStorage.get('backgroundImage');
};
