import { connect } from "react-redux";

import { AppState } from "../../../sagas/reducers/rootReducer";
import * as actionTypes from "../../../sagas/actionTypes/guestsActionTypes";
import Guests from "./Guests";

const mapStateToProps = (state: AppState) => {
  return {
    guests: state.guests.guests,
    isLoading: state.isLoading[actionTypes.GET_GUESTS],
    error: state.error[actionTypes.GET_GUESTS]
  };
};

export default connect(
  mapStateToProps,
  null
)(Guests);