import axios from 'axios';

const http = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
  timeout: 90000,
  transformRequest: [],
  transformResponse: [],
  responseType: 'json',
});

http.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
http.defaults.headers.put['Content-Type'] = 'application/json; charset=UTF-8';
http.defaults.headers.patch['Content-Type'] = 'application/json; charset=UTF-8';
http.defaults.withCredentials = true;

export default http;
