import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-7fa13.firebaseio.com/'
});

export default instance;
