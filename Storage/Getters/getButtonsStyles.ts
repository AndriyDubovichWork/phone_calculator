import * as SyncStorage from 'sync-storage';

export const getButtonsStyles: any = () => {
  return SyncStorage.get('buttons');
};
