import { useDispatch } from 'react-redux';
import { useState, useEffect } from "react";

import { initializeState, setOrder } from "../reducers/partyReducer";
import { getResource } from "../services/party";
import { setDietsQuerry } from "../utils/setDietsQuerry";
import { setDiet } from '../utils/setDiet';
import { getPizzaType } from "../utils/getPizzaType";
import useEqualSelector from './useEqualSelector';
import useFetch from "./useFetch";
import { formatToBYN } from '../utils/formatToBYN';

const useFetchApi = () => {
  const dispatch = useDispatch();
  const [currency, getCurrency] = useFetch(null);
  const [colaAccount, getColaAccount] = useFetch(null);
  const [pizzaAccount, setPizzaAccount] = useState<any>();
  const [pizzaEaters, setPizzaEaters] = useState(0)

  const usedLocalStorage: boolean = useEqualSelector(state => state.party.status);

  useEffect(() => {
    const pizzaAccountBYN = formatToBYN(pizzaAccount?.price, currency);
    const colaAccountBYN = formatToBYN(colaAccount?.price, currency);
    dispatch(setOrder(pizzaAccountBYN, colaAccountBYN, pizzaEaters));
  }, [colaAccount, currency, dispatch, pizzaAccount, pizzaEaters]);

  const fetchNow = async () => {
    const { party } = await getResource("guests");
    const pizzaEatersNumber = party.filter((eater: { eatsPizza: boolean; }) => eater.eatsPizza === true).length;
    setPizzaEaters(pizzaEatersNumber);
    const querry: string = setDietsQuerry(party);
    const { diet } = await getResource("world-diets-book/" + querry);
    dispatch(initializeState(setDiet(party, diet)));
    const typePizza = getPizzaType(diet);
    void getCurrency('currency');
    void getColaAccount(`order-cola/${party.length}`);
    const pizzaCheck = await getResource(`order/${typePizza}/${pizzaEatersNumber}`);
    setPizzaAccount(pizzaCheck);
  }
  if (!usedLocalStorage) {
    fetchNow();
  }
  return;
}

export default useFetchApi;
