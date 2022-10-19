import storage from './../Storage';

export const buttonStyles = async () => {
  return JSON.parse(
    await storage.load({
      key: 'buttonStyles',
    })
  );
};
