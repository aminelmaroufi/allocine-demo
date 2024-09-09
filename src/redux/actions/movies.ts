import { IFilter } from "../../models";
import ActionTypes from "../../utils/actionTypes";

// Get movies list
export const getMovies = (params: IFilter) => ({
  type: ActionTypes.GET_MOVIES_REQUEST,
  params,
});

//Get selected movie's details
export const getMovieDetails = (id: string) => ({
  type: ActionTypes.SELECT_MOVIE,
  id,
});
