import { TOKEN } from "./constant";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(TOKEN, token);
  } catch (error) {
    console.log(error);
  }
};

export const getToken = async (token) => {
  try {
    await AsyncStorage.getItem(TOKEN);
  } catch (error) {
    console.log(error);
  }
};
