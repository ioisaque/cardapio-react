import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sistema.rochasdelivery.com.br/webservices',
  // baseURL: 'http://block-pc/sistema.rochasdelivery.com.br/webservices',
});

export default api;
