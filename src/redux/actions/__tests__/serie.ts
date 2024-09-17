import { getSeries, getSerieDetails } from '..';
import ActionTypes from 'src/utils/actionTypes';
import { IFilter } from 'src/models';

describe('serie actions', () => {
  it('should create an action to get series', () => {
    const params: IFilter = { type: 'popular', page: 1, newFilter: false };
    const expectedAction = {
      type: ActionTypes.GET_SERES_REQUEST,
      params,
    };
    expect(getSeries(params)).toEqual(expectedAction);
  });

  it('should create an action to get serie details', () => {
    const id = '12345';
    const expectedAction = {
      type: ActionTypes.SELECT_SERIE,
      id,
    };
    expect(getSerieDetails(id)).toEqual(expectedAction);
  });
});
