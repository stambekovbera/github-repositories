import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create( {
    baseURL: process.env.BASE_API_URL,
} );

axiosInstance.interceptors.request.use( (config) => {
    if (config && config.headers) {
        config.headers.Authorization = `Bearer ${ process.env.GITHUB_API_TOKEN }`;
        return config;
    }

    return config;
} );

export {
    axiosInstance as agent
};
