import { useDispatch } from 'react-redux';

import { initializeState } from "../reducers/partyReducer";
import { getResource } from "../services/party";
import { setDietsQuerry } from "../utils/setDietsQuerry";
import { setDiet } from '../utils/setDiet';
import useEqualSelector from './useEqualSelector';

const useFetchApi = () => {
  const dispatch = useDispatch();
  const usedLocalStorage: boolean = useEqualSelector(state => state.party.status);

  const fetchNow = async () => {
    const { party } = await getResource("guests");
    const querry: string = setDietsQuerry(party);
    const { diet } = await getResource("world-diets-book/" + querry);
    dispatch(initializeState(setDiet(party, diet)));
  }
    if(!usedLocalStorage) {
      fetchNow();
    }
  return; 
}

export default useFetchApi;
