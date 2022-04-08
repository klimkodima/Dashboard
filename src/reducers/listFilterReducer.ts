import { AnyAction } from 'redux';

import { ListFilter } from '../types';

export type State = {
  listFilter: ListFilter;
};

const initialState: State = {
  listFilter: ListFilter.All,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'SET_LIST_FILTER':
    return action.payload
    default:
      return state;
  }
};

export const setFilter = (filter: ListFilter) => 
  ((dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
      type: "SET_LIST_FILTER",
      payload: {
        filter
      }
    })
  });

export default reducer;