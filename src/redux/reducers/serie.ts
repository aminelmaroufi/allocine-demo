import ActionTypes from 'src/utils/actionTypes';
import { serieActions, SerieState } from 'src/types';
import { ISerie } from 'src/models';

export const emptySerie: ISerie = {
  adult: false,
  backdrop_path: '',
  genre_ids: [],
  id: 0,
  origin_country: [],
  original_language: '',
  original_name: '',
  overview: '',
  popularity: 0,
  poster_path: '',
  first_air_date: '',
  name: '',
  vote_average: 0,
  vote_count: 0,
};

const initialState: SerieState = {
  series: [],
  serie: emptySerie,
  total: 0,
  pages: 0,
  page: 0,
  limit: 10,
};
export default function reducer(state = initialState, action: serieActions) {
  switch (action.type) {
    case ActionTypes.GET_SERIES_SUCCESS:
      return {
        ...state,
        series: [...state.series, ...action.payload.series],
        total: action.payload.total,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case ActionTypes.SELECT_SERIE:
      return {
        ...state,
        serie: action.payload.serie,
      };
    case ActionTypes.RESET_COLLECTION:
      return {
        ...state,
        series: [],
      };
    default:
      return state;
  }
}
