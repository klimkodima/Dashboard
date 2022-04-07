import React from "react";
import Box from '@mui/material/Box';

import PaidCheck from "./PaidCheck";
import FillFeedBacks from "./FillFeedBacks";

export default function Statistics() {
    
  
    
    return (
      <Box sx={{ width: '100%' }}>
        <PaidCheck/>
        <FillFeedBacks/>
      </Box>
    );
  }