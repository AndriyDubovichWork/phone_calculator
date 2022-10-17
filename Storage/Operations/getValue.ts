import AsyncStorage from '@react-native-async-storage/async-storage';

const getValue = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

export default getValue;
