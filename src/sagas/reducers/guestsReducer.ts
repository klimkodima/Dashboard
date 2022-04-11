import * as actions from "../actionTypes/guestsActionTypes";
import { UIGuest } from "../../types";

export interface GuestsState {
  guests: UIGuest[];
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
    case actions.GET_GUESTS_SUCCESS:
      return { ...state,
        guests: action.guests
      };
    default:
      return state;
  }
}
