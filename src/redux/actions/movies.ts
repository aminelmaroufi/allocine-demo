import { IFilter } from 'src/models';
import ActionTypes from 'src/utils/actionTypes';

// Get movies list
export const getMovies = (params: IFilter) => ({
  type: ActionTypes.GET_MOVIES_REQUEST,
  params,
});

export const resetMovies = () => ({
  type: ActionTypes.RESET_COLLECTION,
});

//Get selected movie's details
export const getMovieDetails = (id: string) => ({
  type: ActionTypes.SELECT_MOVIE,
  id,
});
