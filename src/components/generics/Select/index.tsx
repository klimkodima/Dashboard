import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const DropDownSelect = ({ items, filter, defaultValue }: any) => {
    const [listFilter, setListFilter] = useState(defaultValue);
    const dispatch = useDispatch();

    const handleChange = (event: any) => {
        setListFilter(event.target.value);
        dispatch(filter(event.target.value));
    };

    return (
        <Box sx={{ width: 200, m: 2 }}>
            <FormControl fullWidth>
                <InputLabel >Filter</InputLabel>
                <Select
                    labelId="Filter-select-label"
                    value={listFilter}
                    label="Filter"
                    onChange={handleChange}
                >
                    {Object.entries(items).map((item: any) => <MenuItem key={item[0]} value={item[1]}>{item[1]}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    );
};

export default DropDownSelect;
