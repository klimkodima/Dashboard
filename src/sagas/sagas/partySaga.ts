import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchAPI } from "../../services/guests";
import * as guestsActionCreators from "../actionCreators/guestsActionCreators";
import * as guestsActionTypes from "../actionTypes/guestsActionTypes";
//import * as currencyActionCreators from "../actionCreators/currencyActionCreators";
//import * as currencyActionTypes from "../actionTypes/currencyActionTypes";

import { setDietsQuerry } from "../../utils/setSagasDietsQuerry";
import { setDiet } from '../../utils/setDiet';
import { getPizzaType } from "../../utils/getPizzaType";
import { formatToBYN } from '../../utils/formatToBYN';
import {  GuestWithOrder } from "../../types";



function* onClearState() {
  
  yield put(guestsActionCreators.clearState());

}

function* onLoadGuests() {

  try {
 //   yield put(guestsActionCreators.getGuestsRequest());
    const { data } = yield call(fetchAPI,"guests");
    const pizzaEatersNumber: number = data.party.filter((eater: { eatsPizza: boolean; }) => eater.eatsPizza === true).length;
    const querry: string = yield call(setDietsQuerry, data.party);
    const { currency } = yield call(fetchAPI,"currency");
    const { data: colaAccount } = yield call(fetchAPI,`order-cola/${data.party.length}`);
    const { data: {diet }} = yield call(fetchAPI,"world-diets-book/" + querry);
    const guestsWithDiet: GuestWithOrder[] = yield call(setDiet,data.party, diet);
    const typePizza:string = yield call(getPizzaType, diet);
    const { data: pizzaAccount } = yield call(fetchAPI,`order/${typePizza}/${pizzaEatersNumber}`);
    const pizzaAccountBYN: number = yield call(formatToBYN, pizzaAccount?.price, currency);
    const colaAccountBYN: number = yield call(formatToBYN, colaAccount?.price, currency);
    const totalOrder = pizzaAccountBYN + colaAccountBYN;
    const pizzaPaiment = pizzaAccountBYN / pizzaEatersNumber;
    const colaPaiment = colaAccount /  data.party.guests.length;
    const guests: GuestWithOrder[] = guestsWithDiet.map((guest: GuestWithOrder) =>
     guest.eatsPizza === true
      ? 
      { ...guest, order: pizzaPaiment + colaPaiment }
       : 
       { ...guest, order: colaPaiment });
     yield put(guestsActionCreators.setGuests(guests));
  } catch (error:any) {
    yield put(guestsActionCreators.getGuestsFailure(error.response.data.error));
  }
};
/*
function* workerGuests() {

  try {
    const task0 = yield fork(onLoadGuests);
    const guests = yield join(task0);
   
  //  yield put(guestsActionCreators.getGuestsSuccess(data.party));
  } catch (error:any) {
    yield put(guestsActionCreators.getGuestsFailure(error.response.data.error));
  }
};*/
/*
function* onLoadCurrency({ }: currencyActionTypes.GetCurrencyAction) {

  try {
    yield put(currencyActionCreators.getCurrencyRequest());
    const { data } = yield call(fetchAPI, "currency");
    yield put(currencyActionCreators.getCurrencySuccess(data));
  } catch (error:any) {
    yield put(currencyActionCreators.getCurrencyFailure(error.response.data.error));
  }
}

*/


function* watchOnLoadGuests() {
  yield takeEvery(guestsActionTypes.GET_GUESTS, onLoadGuests);
}

function* watchOnClearState() {
  yield takeEvery(guestsActionTypes.CLEAR_STATE, onClearState);
}

export default function* partySaga() {
  yield all([fork( watchOnLoadGuests), fork( watchOnClearState)]);
}
