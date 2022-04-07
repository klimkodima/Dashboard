import  React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { setFilter } from "../../reducers/tableFilterReducer";
import { TableFilter } from '../../types';
 
export default function BasicSelect() {

  const [tableFilter, setTableFilter] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setTableFilter(event.target.value);
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box sx={{ width: 200, m:2 }}>
      <FormControl fullWidth>
        <InputLabel id="tableFilter-select-label">Table filter</InputLabel>
        <Select
          labelId="tableFilter-select-label"
          id="tableFilter-select"
          value={tableFilter}
          label="Table filter"
          onChange={handleChange}
        >
          <MenuItem value={TableFilter.All}>{TableFilter.All}</MenuItem>
          <MenuItem value={TableFilter.Meat}>{TableFilter.Meat}</MenuItem>
          <MenuItem value={TableFilter.Vegans}>{TableFilter.Vegans}</MenuItem>
          <MenuItem value={TableFilter.Paid}>{TableFilter.Paid}</MenuItem>
          <MenuItem value={TableFilter.NotPaid}>{TableFilter.NotPaid}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
