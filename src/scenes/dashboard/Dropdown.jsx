import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ onChanger,update,data}) {
  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <Select value={update} label="User Type"
         onChange={onChanger}
          
        >
          {
            data && data.map(({ name, value }, index) =>
              <MenuItem key={index} value={value}  >{name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
