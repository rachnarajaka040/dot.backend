import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import Dropdown from './Dropdown';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(31, 42, 64)',
    color: theme.palette.common.white,
    position: 'relative',
    paddingRight: '24px',
    cursor: 'pointer',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  filterIcon: {
  
    top: '50%',
    right: '4px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgb(31, 42, 64)',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables() {
  const [userData, setUserData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filter, setFilter] = useState('');
  const [filterColumn, setFilterColumn] = useState('');
  const [showFilterInput, setShowFilterInput] = useState(false);
  const [sortColumn, setSortColumn] = useState('firstName');
  const [sortOrder, setSortOrder] = useState('asc');
  const [userType, setUserType] = useState('all');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4001/api/v1/user/getusers/${userType}`);
        
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          throw new Error('User not found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [userType]);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFilterIconClick = (column) => {
    setFilter('');
    setFilterColumn(column);
    setShowFilterInput(!showFilterInput);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSortColumn = (column) => {
    setSortColumn(column);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const handleDropdownChange = (userData) => {
    setUserData(userData);
  };

  const handleDeleteConfirmation = async (user) => {
    try {
      // Call the deleteUser API with the selectedUser ID
      const response = await fetch(`http://localhost:4001/api/v1/user/delete/${user._id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // User deletion successful
        const newData = userData.filter((u) => u._id !== user._id);
        setUserData(newData);
      } else {
        throw new Error('User deletion failed.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const filteredUserData = userData.filter((user) => {
    if (filterColumn === 'lastName') {
      return user.lastName.toLowerCase().includes(filter.toLowerCase());
    }
    if (filterColumn === 'email') {
      return user.email.toLowerCase().includes(filter.toLowerCase());
    }
    if (filterColumn === 'mobile') {
      return user.mobile.toLowerCase().includes(filter.toLowerCase());
    }
    return user.firstName.toLowerCase().includes(filter.toLowerCase());
  });

  const sortedUserData = filteredUserData.sort((a, b) => {
    const nameA = a[sortColumn].toLowerCase();
    const nameB = b[sortColumn].toLowerCase();

    if (sortOrder === 'asc') {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
    } else {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
    }

    return 0;
  });

  return (
    <React.Fragment>
      
      <div style={{ margin: '20px' }}>
          <StyledTableCell>
          <Dropdown onChange={handleDropdownChange} update={setUserType} updated={userType}/>
          </StyledTableCell>
          <StyledTableCell>
  <button
   
    style={{
      borderRadius: '4px',
      padding: '5px 12px',
      backgroundColor: 'white',
      color: 'black',
      border: 'none',
      cursor: 'pointer',
    }}
  >
    Admin
  </button>
</StyledTableCell>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  First Name
                  <FilterListIcon
                    className="filterIcon"
                    onClick={() => handleFilterIconClick('firstName')}
                    sx={{ margin: '0px 0px -8px 2px' }}
                  />
                  {showFilterInput && filterColumn === 'firstName' && (
                    <TextField value={filter} onChange={handleFilterChange} size="small" sx={{ left: '0',position:'absolute',backgroundColor:'black',color:'white',marginTop:'20px',marginLeft:'10px',border:'1px solid white' }} />
                  )}
                </StyledTableCell>

                <StyledTableCell>
                  Last Name
                  <FilterListIcon
                    className="filterIcon"
                    onClick={() => handleFilterIconClick('lastName')}
                    sx={{ margin: '0px 0px -8px 2px' }}
                  />
                  {showFilterInput && filterColumn === 'lastName' && (
                    <TextField value={filter} onChange={handleFilterChange} size="small" sx={{ left: '0',position:'absolute',backgroundColor:'black',color:'white',marginTop:'20px',marginLeft:'10px',border:'1px solid white' }} />
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  User Type
                  
                </StyledTableCell>
                
                <StyledTableCell>
                  Email
                  <FilterListIcon
                    className="filterIcon"
                    onClick={() => handleFilterIconClick('email')}
                    sx={{ margin: '0px 0px -8px 2px' }}
                  />
                  {showFilterInput && filterColumn === 'email' && (
                    <TextField value={filter} onChange={handleFilterChange} size="small" sx={{ left: '0',position:'absolute',backgroundColor:'black',color:'white',marginTop:'20px',marginLeft:'10px',border:'1px solid white' }}/>
                  )}
                </StyledTableCell>
                <StyledTableCell>
                  Mobile Number
                  <FilterListIcon
                    className="filterIcon"
                    onClick={() => handleFilterIconClick('mobile')}
                    sx={{ margin: '0px 0px -8px 2px' }}
                  />
                  {showFilterInput && filterColumn === 'mobile' && (
                    <TextField value={filter} onChange={handleFilterChange} size="small" sx={{ left: '0',position:'absolute',backgroundColor:'black',color:'white',marginTop:'20px',marginLeft:'10px',border:'1px solid white' }}/>
                  )}
                </StyledTableCell>
                <StyledTableCell onClick={() => handleSortColumn('firstName')}>All Details</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedUserData.length > 0 ? (
                sortedUserData.map((user) => (
                  <StyledTableRow key={user._id} >
                    <StyledTableCell>{user.firstName}</StyledTableCell>
                    <StyledTableCell>{user.lastName}</StyledTableCell>
                    <StyledTableCell>{user.adminType}</StyledTableCell>
                    <StyledTableCell>{user.email}</StyledTableCell>
                    <StyledTableCell>{user.mobile}</StyledTableCell>
                    
                    <StyledTableCell>
                      <button
                        onClick={() => handleOpenModal(user)}
                        style={{
                          borderRadius: '4px',
                          padding: '5px 12px',
                          backgroundColor: 'white',
                          color: 'black',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        All Details
                      </button>
                    </StyledTableCell>
                    <StyledTableCell>
                      <button
                        onClick={() => handleDeleteConfirmation(user)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '4px',
                          padding: '5px 12px',
                          backgroundColor: 'white',
                          color: 'black',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        <DeleteIcon style={{ marginRight: '4px' }} />
                      
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={5} align="center">
                    No user data available
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: '3px solid black',
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            maxWidth: '400px',
          }}
        >
          {selectedUser && (
            <div>
              <h2 style={{ marginBottom: '16px' }}>User Details</h2>
              <p>
                <strong>First Name:</strong> {selectedUser.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {selectedUser.lastName}
              </p>
            
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Mobile Number:</strong> {selectedUser.mobile}
              </p>
              <p>
                <strong>Gender:</strong> {selectedUser.gender}
              </p>
              {/* Additional details can be displayed here */}
            </div>
          )}
          <button
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              backgroundColor: 'rgb(31, 42, 64)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
}
