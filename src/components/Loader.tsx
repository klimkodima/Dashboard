import React, { FC } from "react";
import { Oval } from "react-loader-spinner";
import Box from '@mui/material/Box';

const Loader: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Oval color="#F137A6" secondaryColor="#000" />
      <p>Loading...</p>
    </Box>
  );
};

export default Loader;
