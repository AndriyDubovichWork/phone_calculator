import * as SyncStorage from 'sync-storage';

export const InitStorage = async () => {
  await SyncStorage.init();
};
