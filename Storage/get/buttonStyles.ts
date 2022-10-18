import storage from './../Storage';

export const buttonStyles = async () => {
  return await storage.load({
    key: 'buttonStyles',
    autoSync: true,
    syncInBackground: true,
  });
};
