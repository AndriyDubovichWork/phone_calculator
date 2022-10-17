import * as SyncStorage from 'sync-storage';

export const SetImg = (img: string) => {
  SyncStorage.set('backgroundImage', img);
};
