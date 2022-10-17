import AsyncStorage from '@react-native-async-storage/async-storage';

const setValue = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, value);
};

export default setValue;
