import { AnyAction } from 'redux';

import { UIGuest, Feedback, FormField } from '../types';

export type State = {
  guests: UIGuest[];
  status: boolean;
  formFields: FormField[];
};

const initialState: State = {
  guests: [],
  status: false,
  formFields: [],
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOAD_GUESTS':
      return { ...state, status: true, guests: action.payload };
    case 'CLEAR_STATE':
      return {  guests: [], status: false, formFields: [] };
    case 'ADD_FEEDBACK':
      return {
        ...state, guests: state.guests.map((guest: UIGuest) =>
          guest.id === action.payload.id ? { ...guest, feedback: action.payload.value } : guest
        )
      };
    case 'DELETE_FEEDBACK':
      return {
        ...state, guests: state.guests.map((guest: UIGuest) =>
          guest.id === action.payload ? { ...guest, feedback: undefined } : guest
        )
      };
    case 'ADD_FORM_FIELD':
      return { ...state, formFields: [action.payload, ...state.formFields]};
    default:
      return state;
  }
};

export const initializeState = (guests: UIGuest[]) => {
  return ((dispatch: (arg0: { type: string; payload: UIGuest[]; }) => void) => {
    dispatch({
      type: 'LOAD_GUESTS',
      payload: guests
    })
  })
};

export const addFeedback = (value: Feedback, id: number) => {
  return ((dispatch: (arg0: { type: string; payload: { value: Feedback; id: number; }; }) => void) => {
    dispatch({
      type: 'ADD_FEEDBACK',
      payload: { value, id }
    })
  });
};

export const deleteFeedback = (id: number) => {
  return ((dispatch: (arg0: { type: string; payload: number; }) => void) => {
    dispatch({
      type: 'DELETE_FEEDBACK',
      payload: id
    })
  });
};

export const clearState = () => {
  return ((dispatch: (arg0: { type: string; }) => void) => {
    dispatch({
      type: 'CLEAR_STATE',
    })
  });
};

export const addFeedBackFormField = (field: FormField) => {
  return ((dispatch: (arg0: { type: string; payload: FormField; }) => void) => {
    dispatch({
      type: 'ADD_FORM_FIELD',
      payload: field
    })
  });
};


export default reducer;