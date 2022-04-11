import Box from '@mui/material/Box';
import { shallowEqual } from 'react-redux';

import { useAppSelector } from '../../hooks/hooks';
import PaidProgress from "./PaidProgress";
import FeedBacksProgress from "./FeedBacksProgress";
import { GuestWithOrder } from "../../types";

export default function Statistics() {

  const { feedbackProgress, paidProgress }: { feedbackProgress: number, paidProgress: number } = useAppSelector(
    ({ party: { guests }}) => {
      const allGuests = guests.length;
      const paidCheck = guests.filter((guest: GuestWithOrder) => guest.order === 0).length
      const pizzaEaters = guests.filter((guest: GuestWithOrder) => guest.eatsPizza === true).length;
      const feedbackProgress = guests.filter((guest: GuestWithOrder) => !!guest.feedback).length;
      return { feedbackProgress: feedbackProgress / pizzaEaters * 100, paidProgress: paidCheck / allGuests * 100 };
    }
    , shallowEqual);

  return (
    <Box sx={{ width: '100%', height: "100%", display: "flex", alignItems: "center" }}>
      <PaidProgress paidProgress={paidProgress} />
      <FeedBacksProgress feedbackProgress={feedbackProgress} />
    </Box>
  );
}