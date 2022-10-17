import AsyncStorage from '@react-native-async-storage/async-storage';

const getValue = async (key: string) => {
  const res = (await AsyncStorage.getItem(key)) || 'error';
  return JSON.parse(res);
};

export default getValue;
