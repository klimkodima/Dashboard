import { AnyAction } from 'redux';

import { TableFilter } from '../types';

export type State = {
  listFilter: TableFilter;
};

const initialState: State = {
  listFilter: TableFilter.All,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_TABLE_FILTER':
      return action.payload;
      case 'SET_DEFAULT':
      return TableFilter.All;
    default:
      return state;
  }
};

export const setFilter = (filter: TableFilter) =>
((dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: "SET_TABLE_FILTER",
    payload: {
      filter
    }
  })
});

export const setDefaultTableFilter = () =>
((dispatch: (arg0: { type: string; }) => void) => {
  dispatch({
    type: "SET_DEFAULT",
  })
});

export default reducer;