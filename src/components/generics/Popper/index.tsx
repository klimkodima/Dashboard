import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import PopperInfo from "./PopperInfo";

const TransitionsPopper = ({ open, anchorEl, guest }: { open: boolean, anchorEl: any, guest: any }) => {

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Card sx={{ minWidth: 275, maxWidth: 500, backgroundColor: "#f8f8f8" }}>
                        <CardContent>
                            <PopperInfo guest={guest} />
                        </CardContent>
                    </Card>
                </Fade>
            )}
        </Popper>
    );
};

export default TransitionsPopper;