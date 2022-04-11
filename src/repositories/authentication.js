import API from '../services/API';

const loginAPI = async (values) => {
  const response = await API.post('/login', values);
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
