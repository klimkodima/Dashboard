import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useAppSelector } from '../../hooks/hooks';
import { shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';

import { formatMoney } from '../../utils/formatMoney';
import { GuestWithOrder, Order } from "../../types";
import { setPaid } from "../../reducers/partyReducer";


const PayTable = () =>{

    const dispatch = useDispatch();

  const guests: GuestWithOrder[] = useAppSelector(state => state.party.guests, shallowEqual);

  const order: Order = useAppSelector(
    state => state.party.order
    , shallowEqual);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, money: number, name: string) => {
    dispatch(setPaid(money, name));
    e.currentTarget.setAttribute("disabled", "true");
    e.currentTarget.innerText = 'Paid';
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Share to pay</TableCell>
            <TableCell align="right">Pay</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {guests.map(guest => (
            <TableRow
              key={guest.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="vegan" component="th" scope="row"
               sx={{...(guest.isVegan ? { color: 'green' } : { color: 'text.primary' })}}
              >{guest.name}</TableCell>
              <TableCell align="right">{formatMoney(guest.order)} BYN</TableCell>
              <TableCell align="right"><button onClick={(e) => handleClick(e, guest.order, guest.name)}>Pay</button></TableCell>
            </TableRow>
        ))}
        </TableBody>
        <TableHead>
          <TableRow>
            <TableCell>Total order</TableCell>
            <TableCell align="right">{formatMoney(order.totalOrder)} BYN</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Money to collect</TableCell>
            <TableCell align="right">{formatMoney(order.moneyToCollect)} BYN</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Money collected</TableCell>
            <TableCell align="right">{formatMoney(order.collectedMoney)} BYN</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default PayTable;