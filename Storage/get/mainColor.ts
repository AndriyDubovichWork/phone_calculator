import storage from '../Storage';

export const getMainColor = async () => {
  return await storage.load({
    key: 'mainColor',
    autoSync: true,
    syncInBackground: true,
  });
};
