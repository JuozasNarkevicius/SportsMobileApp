import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../services/API';

const loginAPI = async (values) => {
  const response = await API.post('/login', values);
  await AsyncStorage.setItem('userId', JSON.stringify(response.data.id));
  return response;
};

const logoutAPI = async () => {
  await API.post('/logout');
};

const authenticationService = {
  loginAPI,
  logoutAPI,
};

export default authenticationService;
