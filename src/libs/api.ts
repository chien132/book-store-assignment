import axios, { AxiosResponse } from "axios";

const API = {
  apiInstance: axios.create({
    baseURL: import.meta.env.VITE_API,
    // withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      // ...(import.meta.env.VITE_ENV === "development" && {
      //   "Access-Control-Allow-Origin": "*",
      // }),
    },
  }),

  API_PATH: {
    APP: {
      LOGIN: "/example/login",
    },
    BOOK: {
      SEARCH:
        "https://openlibrary.org/search.json?q=house%20of%20leaves&limit=16",
      FAVORITES:
        "https://openlibrary.org/people/chienne7781/books/want-to-read.json",
    },
  },
  app: {
    login: (): Promise<AxiosResponse<void>> => {
      return API.apiInstance.post(API.API_PATH.APP.LOGIN);
    },
  },
  book: {
    search: (): Promise<AxiosResponse> => {
      return API.apiInstance.get(API.API_PATH.BOOK.SEARCH);
    },
    getFavorites: (): Promise<AxiosResponse> => {
      return API.apiInstance.get(API.API_PATH.BOOK.FAVORITES);
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
