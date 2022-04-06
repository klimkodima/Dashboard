import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import Container from '@mui/material/Container';

import FeedBack from "./FeedBack";
import GuestsList from "./GuestsList";

const Main = () => {

  return (
    <Container component="main" sx={{ minHeight: '96vh' }}>
    <Routes>
      <Route path="/" element={<GuestsList />} />
      <Route path="/feedback/:guestId" element={<FeedBack/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Container>
  );
};

export default Main;
