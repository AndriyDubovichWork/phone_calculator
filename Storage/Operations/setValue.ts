import AsyncStorage from '@react-native-async-storage/async-storage';

const setValue = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  return await AsyncStorage.setItem(key, jsonValue);
};

export default setValue;
