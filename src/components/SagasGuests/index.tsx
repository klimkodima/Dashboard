//import React from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';


import { getGuests } from '../../sagas/actionCreators/guestsActionCreators';
import { useAppSelector } from '../../hooks/hooks';


const SagasGuests = () => {

  const dispatch = useDispatch();
  const {guests, isLoading, error } =  useAppSelector(state => 
    ({guests:state.saga.guests, isLoading: state.saga.isLoading , error: state.saga.error}));

    useEffect(() => {
        dispatch(getGuests("guests"));
    },);

  return (
    <div>
      <h1>Guests</h1>
     {String(guests)}
    </div>
  );
};

export default SagasGuests;
