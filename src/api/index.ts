import axios from 'axios';
import { BASE_URL } from 'utils';
BASE_URL;

const Axios = axios.create({
	baseURL: BASE_URL,
	timeout: 5000,
	withCredentials: true,
});

Axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

Axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default Axios;
