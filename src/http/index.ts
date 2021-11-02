import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { IDataType } from "./../types/http";

const instance: AxiosInstance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

instance.interceptors.response.use(
  ({ data, status }) => {
    return data;
  },
  (error) => {
    console.log(error);
    return error;
  }
);

const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    instance
      .request<T, any>(config)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default request;
