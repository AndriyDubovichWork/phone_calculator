import storage from './../Storage';

export const setMainColor = (color: string) => {
  storage.save({ key: 'mainColor', data: color });
};
