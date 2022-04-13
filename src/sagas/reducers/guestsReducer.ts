import * as actions from "../actionTypes/guestsActionTypes";
import { GuestWithOrder, FormField, Order } from "../../types";

export interface GuestsState {
  guests: GuestWithOrder[];
  formFields: FormField[];
  order: Order;
}

const initialState: GuestsState = {
  guests: [],
  formFields: [],
  order: { totalOrder: 0, moneyToCollect: 0, collectedMoney: 0 },
};

export default function guestsReducer(
  state: GuestsState = initialState,
  action: actions.GuestsAction
): GuestsState {
  switch (action.type) {
    case actions.SET_GUESTS:
      return {
        ...state,
        guests: action.guests,
        order: action.order
      };
    case actions.CLEAR_STATE:
      return { ...initialState };
    default:
      return state;
  }
}
