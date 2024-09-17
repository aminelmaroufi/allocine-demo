import { getMovies, getMovieDetails } from '..';
import ActionTypes from 'src/utils/actionTypes';
import { IFilter } from 'src/models';

describe('movie actions', () => {
  it('should create an action to get movies', () => {
    const params: IFilter = { type: 'popular', page: 1, newFilter: false };
    const expectedAction = {
      type: ActionTypes.GET_MOVIES_REQUEST,
      params,
    };
    expect(getMovies(params)).toEqual(expectedAction);
  });

  it('should create an action to get movie details', () => {
    const id = '12345';
    const expectedAction = {
      type: ActionTypes.SELECT_MOVIE,
      id,
    };
    expect(getMovieDetails(id)).toEqual(expectedAction);
  });
});
