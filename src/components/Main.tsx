import React from "react";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box'

const Main = () => {

  return (
    <Container component="main" sx={{  minHeight: '100vh', width: '100vw', display: "flex" }}>
    <Box component="aside" sx={{ backgroundColor: "red", minHeight: '100vh', width: 1/3 }}>

    </Box>
     <Box component="div" sx={{width: 2/3}}>
     <Box component="section" sx={{ height: '30vh', width: '100%', backgroundColor: "green" }}>
      
      </Box>
      <Box component="section" sx={{ height: '70vh', width: '100%', backgroundColor: "orange" }}>
      
      </Box>
    </Box> 
    </Container>
  );
};

export default Main;
