import actionTypes from "../utils/actionTypes";
import { ISerie } from "../models";

export interface SerieState {
  series: Array<ISerie>;
  serie: ISerie;
  total: number;
  pages: number;
  page: number;
  limit: number;
}

export interface getSeriesSuccess {
  series: Array<ISerie>;
  total: number;
  pages: number;
  page: number;
}

export interface selectSerie {
  serie: ISerie;
}

export type getSeriesSuccessPayload = {
  type: actionTypes.GET_SERIES_SUCCESS;
  payload: getSeriesSuccess;
};

export type selectSeriePayload = {
  type: actionTypes.SELECT_SERIE;
  payload: selectSerie;
};

export type resetSeries = {
  type: actionTypes.RESET_COLLECTION;
};

export type serieActions =
  | getSeriesSuccessPayload
  | selectSeriePayload
  | resetSeries;
