import React, { useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import TableRowView from "./TableRow";
import Popper from "../generics/Popper";
import Select from "../generics/Select";
import { setFilter } from "../../reducers/tableFilterReducer";
import { setPaid } from "../../reducers/partyReducer";
import { useAppSelector } from '../../hooks/hooks';
import { formatMoney } from '../../utils/formatMoney';
import { GuestWithOrder, Order, TableFilter } from "../../types";

const PayTable = () => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [poppupData, setPoppupData] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const guests: GuestWithOrder[] = useAppSelector(state => {
    switch (state.tableFilter.filter) {
      case TableFilter.Vegans:
        return state.party.guests.filter((guest: GuestWithOrder) => guest.isVegan === true);
      case TableFilter.Meat:
        return state.party.guests.filter((guest: GuestWithOrder) => guest.isVegan === false);
      case TableFilter.EatPizza:
        return state.party.guests.filter((guest: GuestWithOrder) => guest.eatsPizza === true);
      case TableFilter.Paid:
        return state.party.guests.filter((guest: GuestWithOrder) => guest.order === 0);
      case TableFilter.NotPaid:
        return state.party.guests.filter((guest: GuestWithOrder) => guest.order !== 0);
      default:
        return state.party.guests;
    }
  }, shallowEqual);

  const order: Order = useAppSelector(
    state => state.party.order
    , shallowEqual);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, money: number, name: string) => {
    dispatch(setPaid(money, name));
    e.currentTarget.innerText = 'Paid';
  }

  const handleMouseEnter = (event: any, guest: any) => {
    setOpen(true);
    setPoppupData(guest);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = ()  => {
    setOpen(false);
    setPoppupData({});
    setAnchorEl(null);
  };

  return (
    <TableContainer component={Paper} sx={{ pt: 2 }}>
      <Select items={TableFilter} filter={setFilter} defaultValue={TableFilter.All} />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRowView labels={['Name', 'Share to pay', 'Pay']} />
        </TableHead>
        <TableBody>
          <Popper open={open} guest={poppupData} anchorEl={anchorEl}/>
          {guests.map(guest => (
            <TableRow
              hover
              onMouseEnter={(e) => { handleMouseEnter(e, guest) }}
              onMouseLeave={handleMouseLeave}
              key={guest.name}
              sx={{ active: { backgroundColor: "Highlight" }, '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className="vegan" component="th" scope="row"
                sx={{ ...(guest.isVegan ? { color: 'green' } : { color: 'text.primary' }) }}
              >{guest.name}</TableCell>
              <TableCell align="right">{formatMoney(guest.order)} BYN</TableCell>
              <TableCell align="right">
                <button onClick={(e) => handleClick(e, guest.order, guest.name)}
                  disabled={guest.order === 0}>
                  Pay
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableHead>
          <TableRowView labels={['Total order', formatMoney(order.totalOrder) + ' BYN', '']} />
          <TableRowView labels={['Money to collect', formatMoney(order.moneyToCollect) + ' BYN', '']} />
          <TableRowView labels={['Money collected', formatMoney(order.collectedMoney) + ' BYN', '']} />
        </TableHead>
      </Table>
    </TableContainer>
  );
}

export default PayTable;