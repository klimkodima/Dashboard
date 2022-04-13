import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import Stack from '@mui/material/Stack';

import PayTable from "../PayTable";
import GuestsList from "../Aside";

import FeedBacksProgress from "../Statistics/FeedBacksProgress";
//import Statistics from "../Statistics";
import { useAppDispatch } from '../../hooks/hooks';
import { getGuests } from '../../sagas/actionCreators/guestsActionCreators';

const heights = [100, 150, 100, 50];

const StyledAccordion = styled(Accordion)(() => ({
  backgroundColor: '#fff',
  // color: theme.palette.text.secondary,
}));

const feedbackProgress1 = 30;
const feedbackProgress2 = 50;
const feedbackProgress3 = 80;

/*
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  heght: "50px",
}));

*/
const Main = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGuests());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <Container component="div" sx={{ minHeight: '100vh', width: '100vw',
     display: "flex", flexDirection: "column" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ pb: 5, width: '100%', display: "flex", border: "2px solid lightgrey" }}>
      <Box component="aside" sx={{ minHeight: '90vh', width: 1 / 3 }}>
        <GuestsList />
      </Box>
      <Box component="main" sx={{ width: 2 / 3 }}>
        <Box sx={{ pb: 5, width: '100%', display: "flex", border: "2px solid lightgrey" }}>
          <Stack spacing={2} sx={{ width: '100%', display: "flex", justifyContent: "center" }}>
            <Typography component="h5" variant="h6" sx={{ p: 4, textAlign: 'center', fontWeight: 'bold' }}>
              Component Stack
            </Typography>
            <FeedBacksProgress feedbackProgress={feedbackProgress1} />
            <FeedBacksProgress feedbackProgress={feedbackProgress2} />
          </Stack>
        </Box>
        <Masonry sx={{ mt: 5, border: "2px solid lightgrey" }} columns={1} spacing={3} >
          <Typography component="h5" variant="h6" sx={{ p: 4, textAlign: 'center', fontWeight: 'bold' }}>
            Component whish variable height
          </Typography>
          {heights.map((height, index) => (
            <Paper key={index}>
              <StyledAccordion sx={{ minHeight: height }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Accordion {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>  <FeedBacksProgress feedbackProgress={feedbackProgress3} /></AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
        <Box component="section" sx={{ my: 2, mx: 4, height: '30vh', width: '100%' }}>
        </Box>
        <Box component="section" sx={{ height: '70vh', width: '100%' }}>
          <PayTable />
        </Box>
      </Box>
      </Box>
    </Container>
  );
};

export default Main;
