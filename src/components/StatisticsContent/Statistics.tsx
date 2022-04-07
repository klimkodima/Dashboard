import React from "react";
import Box from '@mui/material/Box';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '../../hooks/hooks';
import {PayProgress} from "./PayProgress";
import {FeedbackProgress} from "./FeedbackProgress";
import { GuestWithOrder } from "../../types";

export const Statistics = () => {    

  const { feedbackProgress, payProgress }:{feedbackProgress: number, payProgress: number} = useAppSelector(
    state => {
      const allGuests = state.party.guests.length;
      const payProgress = state.party.guests.filter(( guest: GuestWithOrder) => guest.order === 0 ).length
      const pizzaEaters = state.party.guests.filter(( guest: GuestWithOrder) => guest.eatsPizza === true ).length;
      const feedbackProgress = state.party.guests.filter(( guest: GuestWithOrder) => !!guest.feedback ).length;
      return { feedbackProgress: feedbackProgress / pizzaEaters * 100, payProgress: payProgress / allGuests*100 };
    } 
    , shallowEqual);
    
    return (
      <Box sx={{ width: '100%' }}>
        <PayProgress payProgress={payProgress}/>
        <FeedbackProgress feedbackProgress={feedbackProgress}/>
      </Box>
    );
  }