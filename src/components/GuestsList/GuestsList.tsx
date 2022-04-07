import React from "react";
import { shallowEqual } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, ListSubheader, Box, Button } from '@mui/material';

import ListFilter  from "./ListFilter";
import { clearState } from "../../reducers/partyReducer";
import { useAppSelector } from '../../hooks/hooks';
import { UIGuest } from "../../types";

const GuestsList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guests:UIGuest[] = useAppSelector(
    state => state.party.guests.sort(
      (a: UIGuest, b: UIGuest) => (a.name).localeCompare(b.name)
    ), shallowEqual);

  const handleBtnClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    dispatch(clearState());
    navigate(`/`);
  };

  const handleLinkClick = (e: { preventDefault: () => void; }, id: number) => {
    e.preventDefault();
    navigate(`/feedback/${id}`);
  };

  return (
    <Box component="div" sx={{ my: 2, mx: 4 }}>
      <List component="nav" aria-label="mailbox folders">
        <ListSubheader component="h2" sx={{ my: 3, fontWeight: 'bold', fontSize: '22px' }}>Party Guests</ListSubheader>
        <ListFilter/>
        {guests.map(guest => (
          <ListItem button divider key={guest.id} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...(guest.isVegan ? { color: 'green' } : { color: 'text.primary' }),
          }} disabled={guest.eatsPizza ? false : true} onClick={(e) => handleLinkClick(e, guest.id)}>
            {guest.feedback && <span role="img" aria-label="tick" style={{ border: '3px solid green', borderRadius: '50%', marginRight: '40px' }}>✔️</span>}
            <ListItemText primary={guest.eatsPizza && guest.name} secondary={!guest.eatsPizza && guest.name} />
          </ListItem>
        ))}
      </List>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}>
        <Button fullWidth variant="contained" onClick={handleBtnClick}
          sx={{
            my: 2,
            backgroundColor: "success.light",
            color: 'text.primary',
          }}>Clear App</Button>
      </Box>
    </Box>
  );
};

export default GuestsList;