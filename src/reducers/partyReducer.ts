import { AnyAction } from 'redux';

import { GuestWithOrder, Feedback, FormField, Order } from '../types';

export type State = {
  guests: GuestWithOrder[];
  status: boolean;
  formFields: FormField[];
  order: Order;
};

const initialState: State = {
  guests: [],
  status: false,
  formFields: [],
  order: { totalOrder: 0, moneyToCollect: 0, collectedMoney: 0 },
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOAD_GUESTS':
      return { ...state, status: true, guests: action.payload };
    case 'CLEAR_STATE':
      return { ...initialState };
    case 'ADD_FEEDBACK':
      return {
        ...state, guests: state.guests.map((guest: GuestWithOrder) =>
          guest.id === action.payload.id ? { ...guest, feedback: action.payload.value } : guest
        )
      };
    case 'DELETE_FEEDBACK':
      return {
        ...state, guests: state.guests.map((guest: GuestWithOrder) =>
          guest.id === action.payload ? { ...guest, feedback: undefined } : guest
        )
      };
    case 'ADD_FORM_FIELD':
      return { ...state, formFields: [action.payload, ...state.formFields] };
    case 'SET_ORDER':
      const totalOrder = action.payload.pizzaOrder + action.payload.colaOrder;
      const pizzaPaiment = action.payload.pizzaOrder / action.payload.pizzaEaters;
      const colaPaiment = action.payload.colaOrder / state.guests.length;
      return {
        ...state,
        order: {
          collectedMoney: 0,
          totalOrder: totalOrder,
          moneyToCollect: totalOrder
        },
        guests: state.guests.map(guest => guest.eatsPizza === true ?
          { ...guest, order: pizzaPaiment + colaPaiment } : { ...guest, order: colaPaiment }),

      };
    case "SET_PAID":
      return {
        ...state,
        order: {
          ...state.order, moneyToCollect: state.order.moneyToCollect - action.payload.money,
          collectedMoney: state.order.collectedMoney + action.payload.money
        },
        guests: state.guests.map(guest => {
          if (guest.name === action.payload.name)
            guest = { ...guest, paidOrder: guest.order, order: 0 };
          return guest;
        })
      };
    default:
      return state;
  }
};

export const initializeState = (guests: GuestWithOrder[]) =>
((dispatch: (arg0: { type: string; payload: GuestWithOrder[]; }) => void) => {
  dispatch({
    type: 'LOAD_GUESTS',
    payload: guests
  })
});

export const addFeedback = (value: Feedback, id: number) => {
  return {
    type: 'ADD_FEEDBACK_REQUEST',
    payload: {value, id}
  }
}
/* ((dispatch: (arg0: { type: string; payload: { value: Feedback; id: number; }; }) => void) => {
  dispatch({
    type: 'ADD_FEEDBACK',
    payload: { value, id }
  })
}) ;*/


export const deleteFeedback = (id: number) =>
((dispatch: (arg0: { type: string; payload: number; }) => void) => {
  dispatch({
    type: 'DELETE_FEEDBACK',
    payload: id
  })
});


export const clearState = () =>
((dispatch: (arg0: { type: string; }) => void) => {
  dispatch({
    type: 'CLEAR_STATE',
  })
});

export const addFeedBackFormField = (field: FormField) =>
((dispatch: (arg0: { type: string; payload: FormField; }) => void) => {
  dispatch({
    type: 'ADD_FORM_FIELD',
    payload: field
  })
});


export const setOrder = (pizzaOrder: number, colaOrder: number, pizzaEaters: number) =>
((dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: 'SET_ORDER',
    payload: {
      pizzaOrder,
      colaOrder,
      pizzaEaters
    }
  })
});


export const setPaid = (money: number, name: string) =>
((dispatch: (arg0: { type: string; payload: any; }) => void) => {
  dispatch({
    type: "SET_PAID",
    payload: {
      money,
      name
    }
  })
});

export default reducer;