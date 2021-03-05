import axios from 'axios';

const api = axios.create({
  baseURL: '_sistema/webservices',
  // baseURL: 'https://sistema.rochasdelivery.com.br/webservices',
});

export default api;
