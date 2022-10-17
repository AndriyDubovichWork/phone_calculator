import * as SyncStorage from 'sync-storage';
import setValue from './../Operations/setValue';

export const SetImg = (img: string) => {
  setValue('backgroundImage', img);
};
