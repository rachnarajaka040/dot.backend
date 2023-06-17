import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({ onChange, update ,updated }) {


  const handleUserTypeChange = (event) => {
    update(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 50 }}>
      <FormControl fullWidth>
        <Select value={updated} onChange={handleUserTypeChange} label="User Type">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="customer">Customer</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
