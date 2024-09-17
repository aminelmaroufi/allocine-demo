import reducer, { emptySerie } from '../serie';
import ActionTypes from 'src/utils/actionTypes';
import { serieActions, SerieState } from 'src/types';
import { ISerie } from 'src/models';

describe('serie reducer', () => {
  const initialState: SerieState = {
    series: [],
    serie: emptySerie,
    total: 0,
    pages: 0,
    page: 0,
    limit: 10,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {} as serieActions)).toEqual(initialState);
  });

  it('should handle GET_SERIES_SUCCESS', () => {
    const previousState: SerieState = {
      ...initialState,
      series: [{ id: 1, name: 'Series 1' } as ISerie],
    };

    const action: serieActions = {
      type: ActionTypes.GET_SERIES_SUCCESS,
      payload: {
        series: [{ id: 2, name: 'Series 2' } as ISerie],
        total: 2,
        pages: 1,
        page: 1,
      },
    };

    const expectedState: SerieState = {
      ...previousState,
      series: [
        { id: 1, name: 'Series 1' } as ISerie,
        { id: 2, name: 'Series 2' } as ISerie,
      ],
      total: 2,
      pages: 1,
      page: 1,
    };

    expect(reducer(previousState, action)).toEqual(expectedState);
  });

  it('should handle SELECT_SERIE', () => {
    const action: serieActions = {
      type: ActionTypes.SELECT_SERIE,
      payload: {
        serie: { id: 1, name: 'Selected Series' } as ISerie,
      },
    };

    const expectedState: SerieState = {
      ...initialState,
      serie: { id: 1, name: 'Selected Series' } as ISerie,
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_COLLECTION', () => {
    const previousState: SerieState = {
      ...initialState,
      series: [{ id: 1, name: 'Series 1' } as ISerie],
    };

    const action: serieActions = {
      type: ActionTypes.RESET_COLLECTION,
    };

    const expectedState: SerieState = {
      ...initialState,
      series: [],
    };

    expect(reducer(previousState, action)).toEqual(expectedState);
  });

  it('should return the current state for unknown action types', () => {
    const previousState: SerieState = {
      ...initialState,
      series: [{ id: 1, name: 'Series 1' } as ISerie],
    };

    const action: any = {
      type: 'UNKNOWN_ACTION',
    };

    expect(reducer(previousState, action)).toEqual(previousState);
  });
});
