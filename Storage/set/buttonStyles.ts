import storage from './../Storage';

export const setButtonStyles = (ButtonStyles: any) => {
  storage.save({ key: 'buttonStyles', data: JSON.stringify(ButtonStyles) });
};
