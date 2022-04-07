import React from "react";
import Box from '@mui/material/Box';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '../../hooks/hooks';
import PaidCheck from "./PaidCheck";
import FillFeedBacks from "./FillFeedBacks";
import { GuestWithOrder } from "../../types";

export default function Statistics() {
    

  const { feedbackProgress, payProgress }:{feedbackProgress: number, payProgress: number} = useAppSelector(
    state => {
      const allGuests = state.party.guests.length;
      const paydCheck = state.party.guests.filter(( guest: GuestWithOrder) => guest.order === 0 ).length
      const pizzaEaters = state.party.guests.filter(( guest: GuestWithOrder) => guest.eatsPizza === true ).length;
      const feedbackProgress = state.party.guests.filter(( guest: GuestWithOrder) => !!guest.feedback ).length;
      return { feedbackProgress: feedbackProgress / pizzaEaters * 100, payProgress: paydCheck / allGuests*100 };
    } 
    , shallowEqual);
    
    return (
      <Box sx={{ width: '100%' }}>
        <PaidCheck payProgress={payProgress}/>
        <FillFeedBacks feedbackProgress={feedbackProgress}/>
      </Box>
    );
  }