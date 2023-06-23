import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ onChange, update, updated, data, apiFunction, updater }) {

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <Select value={updated} onChange={handleUserTypeChange} label="User Type">
          {
            data && data.map(({ name, value }, index) =>
              <MenuItem key={index} value={value} onCLick={() => apiFunction(e.target.value, updater)} >{name}</MenuItem>)
          }
        </Select>
      </FormControl>
    </Box>
  );
}
