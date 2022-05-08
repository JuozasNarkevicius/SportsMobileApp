import AsyncStorage from '@react-native-async-storage/async-storage';
import API from '../services/API';

const getProgramAPI = async (programId) => {
  const response = await API.get(`/programs/${programId}`);
  return response;
};

const getAllProgramsAPI = async () => {
  const userId = await AsyncStorage.getItem('userId');
  const response = await API.get(`/users/${userId}/programs`);
  return response;
};

const getAllFollowedProgramsAPI = async () => {
  const userId = await AsyncStorage.getItem('userId');
  const response = await API.get(`/users/${userId}/savedPrograms`);
  return response;
};

const programService = {
  getProgramAPI,
  getAllProgramsAPI,
  getAllFollowedProgramsAPI,
};

export default programService;
