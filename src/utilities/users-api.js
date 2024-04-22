import sendRequest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function getOne(id){
  return sendRequest(`${BASE_URL}/${id}`);
}

export function updateUser(id, data){
  return sendRequest(`${BASE_URL}/${id}/update`, 'POST', data);
}

export function getAdmin(id){
  return sendRequest(`${BASE_URL}/${id}/admin`);
}
