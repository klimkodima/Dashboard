import * as actions from "../actionTypes/guestsActionTypes";
import { GuestWithOrder } from "../../types";

export interface GuestsState {
  guests: GuestWithOrder[];
}

const initialState: GuestsState = {
  guests: []
};

export default function guestsReducer(
  state: GuestsState = initialState,
  action: actions.GuestsAction
): GuestsState {
  switch (action.type) {
    case actions.SET_GUESTS:
      return {
        ...state,
        guests: action.guests
      };
    case actions.CLEAR_STATE:
      return { ...initialState };
    case actions.GET_GUESTS_SUCCESS:
    default:
      return state;
  }
}
