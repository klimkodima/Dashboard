import  React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';

import PopperInfo from "./PopperInfo";
import { GuestWithOrder } from "../../types";

export default function TransitionsPopper({ open, anchorEl, guest }:{open: any, anchorEl: any, guest: any }) {
  
    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        <PopperInfo guest={guest}/>
                    </Box>
                </Fade>
            )}
        </Popper>
    );
}