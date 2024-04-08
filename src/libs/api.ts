import { BookGenreParams, BookSearchParams } from "@/types/Book";
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
      SEARCH: `https://openlibrary.org/search.json`,
      GENRE: (genre: string) =>
        `https://openlibrary.org/subjects/${genre}.json`,
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
    search: (params: BookSearchParams): Promise<AxiosResponse> => {
      return API.apiInstance.get(API.API_PATH.BOOK.SEARCH, {
        params: {
          q: params.q,
          fields: "title,cover_i,author_name,first_publish_year",
          limit: params.limit,
          page: params.page,
        },
      });
    },
    getByGenre: (params: BookGenreParams): Promise<AxiosResponse> => {
      return API.apiInstance.get(API.API_PATH.BOOK.GENRE(params.genre), {
        params: {
          offset: params.offset,
          limit: params.limit,
        },
      });
    },
    getFavorites: (): Promise<AxiosResponse> => {
      return API.apiInstance.get(API.API_PATH.BOOK.FAVORITES);
    },
  },
};

// API.apiInstance.defaults.withCredentials = true;

export default API;
