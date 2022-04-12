//import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';


import { getGuests } from '../../sagas/actionCreators/guestsActionCreators';
import { useAppSelector } from '../../hooks/hooks';
import { UIGuest } from "../../types";


const SagasGuests = () => {

  const dispatch = useDispatch();
  const { guests, isLoading, error } = useAppSelector(state =>
    ({ guests: state.saga.guests.guests, isLoading: state.saga.isLoading, error: state.saga.error }));

  useEffect(() => {
    dispatch(getGuests());
  });

  if (error) return null;

  return (

    isLoading ? <span>Loading...</span> :
      (
        <div>
          <h1>Guests</h1>
         {guests.map((guest:UIGuest) => <p key={guest.name}>{guest.name}</p>

         )}
        </div>
      )
  );
};

export default SagasGuests;
