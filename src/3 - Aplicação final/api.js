import axios from 'axios'; //Quando eu não coloco "./" ele busca no folder node_modules

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;

