import * as SyncStorage from 'sync-storage';
import { useAsync } from 'react-async-hook';
import getValue from './../Operations/getValue';
export const getImage = async () => {
  return useAsync(() => getValue('backgroundImage'), []);
};
