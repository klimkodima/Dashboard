import Box from '@mui/material/Box';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '../../hooks/hooks';
import PaidCheck from "./PaidCheck";
import FillFeedBacks from "./FillFeedBacks";
import { GuestWithOrder } from "../../types";

export default function Statistics() {

  const { feedbackProgress, payProgress }: { feedbackProgress: number, payProgress: number } = useAppSelector(
    ({ party: { guests }}) => {
      const allGuests = guests.length;
      const paydCheck = guests.filter((guest: GuestWithOrder) => guest.order === 0).length
      const pizzaEaters = guests.filter((guest: GuestWithOrder) => guest.eatsPizza === true).length;
      const feedbackProgress = guests.filter((guest: GuestWithOrder) => !!guest.feedback).length;
      return { feedbackProgress: feedbackProgress / pizzaEaters * 100, payProgress: paydCheck / allGuests * 100 };
    }
    , shallowEqual);

  return (
    <Box sx={{ width: '100%' }}>
      <PaidCheck payProgress={payProgress} />
      <FillFeedBacks feedbackProgress={feedbackProgress} />
    </Box>
  );
}