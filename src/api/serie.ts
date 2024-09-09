import { API_KEY } from "../config";
import { IFilter } from "../models";
import adapter from "../utils/adapter";

export let getSeries = (params: IFilter) => {
  return adapter
    .get(
      `/tv/${params.type}?api_key=${API_KEY}&page=${params.page}&language=en-US`
    )
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
