import axios, { AxiosInstance, AxiosRequestConfig } from "axios";


class AxiosService {
    private defaultConfig: AxiosRequestConfig;
    private axiosInstance: AxiosInstance;

    constructor(authToken: string) {
        this.defaultConfig = {
            baseURL: process.env.BACKEND_SERVER,
            headers: {
                'Content-Type': 'application/json',
                Authorizatoin: `Bearer: ${authToken}`,
            },
        };
        const axiosInstance = axios.create(this.defaultConfig);
        this.axiosInstance = axiosInstance;
    }

    async post() {

    }

    async get() {
        
    }
}