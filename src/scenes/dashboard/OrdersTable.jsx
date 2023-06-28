import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { fetchOrders, downloadInvoice } from '../../apis/users'; // Assuming you have the downloadInvoice API function
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

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch(`${process.env.REACT_APP_GET_USER_ORDER}`);
  //       if (response.ok) {
  //         const data = await response.json();
  //         setOrders(data);
  //         console.log('fetch the data');
  //       } else {
  //         throw new Error('Failed to fetch orders.');
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchOrders();
  // }, []);

  //orderproduct
  useEffect(() => {
    fetchOrders(setOrders);
  }, [])

  const handleDownloadInvoice = async (orderId) => {
    try {
      await downloadInvoice(orderId);
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <React.Fragment>
      <div style={{ margin: '20px' }}>

        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User ID</StyledTableCell>
                <StyledTableCell>Product ID</StyledTableCell>
                <StyledTableCell>Product Details</StyledTableCell>
                <StyledTableCell>Quantity</StyledTableCell>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell>Payment Mode</StyledTableCell>
                <StyledTableCell>Is Delivered</StyledTableCell>
                <StyledTableCell>Invoice</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.length === 0 ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={7} align="center">
                    No data available.
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                orders.map((order) => (
                  <StyledTableRow key={order._id}>
                    <StyledTableCell>{order.userId}</StyledTableCell>
                    <StyledTableCell>{order.productId}</StyledTableCell>
                    <StyledTableCell>{order.productDetails}</StyledTableCell>
                    <StyledTableCell>{order.quantity}</StyledTableCell>
                    <StyledTableCell>{order.productName}</StyledTableCell>
                    <StyledTableCell>{order.paymentMode}</StyledTableCell>
                    <StyledTableCell>{order.isDelivered ? 'Yes' : 'No'}</StyledTableCell>
                    <StyledTableCell> <Button variant="contained" startIcon={<DownloadIcon />} onClick={()=>handleDownloadInvoice(order._id)}>
                      Invoice
                    </Button></StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
}
