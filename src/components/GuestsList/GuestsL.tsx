import { useState } from "react";
import Container from '@mui/material/Container';

import FeedBack from "./FeedBack/FeedBack1";
//import FeedBack from "./FeedBack";
import GuestsList from "./GuestsList";
//import { GuestContext } from './../../contexts/GuestContext';

const Main = () => {

  const [guest, ] = useState();
  
  return (
      <Container component="main" sx={{ minHeight: '96vh' }}>
        {!guest ? <GuestsList /> : <FeedBack />}
      </Container>
  );
};

export default Main;
