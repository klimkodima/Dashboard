import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ListFilter } from './../../types';


export default function BasicSelect() {
  const [listFilter, setTableFilter] = useState('');

  const handleChange = (event: any) => {
    setTableFilter(event.target.value);
  };

  return (
    <Box sx={{ width: 200, m:2 }}>
      <FormControl fullWidth>
        <InputLabel id="listFilter">List filter</InputLabel>
        <Select
          labelId="dlistFilter-select-label"
          id="listFilter-select"
          value={listFilter}
          label="List filter"
          onChange={handleChange}
        >
          <MenuItem value={ListFilter.All}>{ListFilter.All}</MenuItem>
          <MenuItem value={ListFilter.Meat}>{ListFilter.Meat}</MenuItem>
          <MenuItem value={ListFilter.Vegans}>{ListFilter.Vegans}</MenuItem>
          <MenuItem value={ListFilter.Active}>{ListFilter.Active}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
