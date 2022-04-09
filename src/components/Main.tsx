import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

//import GuestsList from "./GuestsList/GuestsL";
import GuestsList from "./GuestsList";
import Statistics from "./Statistics";
import PayTable from "./PayTable";
import useFetchData from "../hooks/useFetchData";

const Main = () => {

  useFetchData();

  return (
    <Container component="main" sx={{ minHeight: '100vh', width: '100vw', display: "flex" }}>
      <Box component="aside" sx={{ minHeight: '100vh', width: 1 / 3 }}>
        <GuestsList />
      </Box>
      <Box component="div" sx={{ width: 2 / 3 }}>
        <Box component="section" sx={{ my: 2, mx: 4, height: '30vh', width: '100%' }}>
          <Statistics />
        </Box>
        <Box component="section" sx={{ height: '70vh', width: '100%' }}>
          <PayTable />
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
