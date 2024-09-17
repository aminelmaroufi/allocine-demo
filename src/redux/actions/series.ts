import { IFilter } from 'src/models';
import ActionTypes from 'src/utils/actionTypes';

// Get series list
export const getSeries = (params: IFilter) => ({
  type: ActionTypes.GET_SERES_REQUEST,
  params,
});

//Get selected serie's details
export const getSerieDetails = (id: string) => ({
  type: ActionTypes.SELECT_SERIE,
  id,
});
