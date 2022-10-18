import storage from './../Storage';

export const getImage = async () => {
  return await storage.load({
    key: 'backgroundImage',
    autoSync: true,
    syncInBackground: true,
  });
};
