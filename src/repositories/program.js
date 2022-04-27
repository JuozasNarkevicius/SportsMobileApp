import API from '../services/API';

const getProgramAPI = async (programId) => {
  const response = await API.get(`/programs/${programId}`);
  return response;
};

const getAllProgramsAPI = async () => {
  const response = await API.get(`/users/${1}/programs`); // fix
  return response;
};

const getAllFollowedProgramsAPI = async () => {
  const response = await API.get(`/users/${1}/savedPrograms`); // fix
  return response;
};

const programService = {
  getProgramAPI,
  getAllProgramsAPI,
  getAllFollowedProgramsAPI,
};

export default programService;
