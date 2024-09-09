import { API_KEY } from "../config";
import { IFilter } from "../models";
import adapter from "../utils/adapter";

export let getMovies = (params: IFilter) => {
  return adapter
    .get(`/movie/${params.type}`, {
      params: {
        api_key: API_KEY,
        page: params.page,
        language: "en-US",
      },
    })
    .catch((err) => {
      let error: any;
      if (typeof err === "string") {
        error.message = err;
      } else {
        error = err.response.data.message
          ? err.response.data
          : err.response.data.result;
      }
      return Promise.reject(error);
    });
};
