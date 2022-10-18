import storage from './../Storage';

export const setImg = (img: string) => {
  storage.save({ key: 'backgroundImage', data: img });
};
