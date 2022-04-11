import { useState } from "react";
import Container from '@mui/material/Container';

import { GuestContext } from "../../contexts/GuestContext";
import FeedBack from "./GuestsList";
import GuestsList from "./GuestsList/GuestsList";
import { UIGuest } from "../../types";

const Aside = () => {
  
  const [guest, setGuest] = useState<UIGuest | undefined>(undefined);
  const [isFeedBackModalOpen, setIsFeedBackModalOpen] = useState(false);
  
  return (
    <GuestContext.Provider value={{ guest, setGuest, isFeedBackModalOpen, setIsFeedBackModalOpen}}>
      <Container component="div" sx={{ minHeight: '96vh' }}>
        { isFeedBackModalOpen ? <FeedBack/> : <GuestsList/>}
      </Container>
      </GuestContext.Provider >
  );
};

export default Aside;
