import axios from 'axios';

axios.defaults.baseURL = 'https://61ef03d0d593d20017dbb281.mockapi.io/api/';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  console.log(response.data);
  return response.data;
}

export async function postContacts(name, number) {
  const content = { name, number };
  const response = await axios.post('/contacts', content);
  return response.data.id;
}
