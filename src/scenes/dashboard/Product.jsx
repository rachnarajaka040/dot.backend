import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'rgb(31, 42, 64)',
    color: theme.palette.common.white,
    position: 'relative',
    paddingRight: '84px',
    cursor: 'pointer',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

export default function Product() {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:4001/api/v1/products/get_all_Products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
          console.log('fetch the data');
        } else {
          throw new Error('Failed to fetch orders.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  


  
  return (
    <React.Fragment>
      <div style={{ margin: '30px' }} >
       
        <TableContainer >
          <Table sx={{ minWidth:300 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product Name</StyledTableCell>
                <StyledTableCell>Product Type</StyledTableCell>
                <StyledTableCell>Short-Description</StyledTableCell>
                <StyledTableCell>Tags</StyledTableCell>
                <StyledTableCell>Tax</StyledTableCell>
                <StyledTableCell>Indicator</StyledTableCell>
                <StyledTableCell>MadeIn</StyledTableCell>
                <StyledTableCell>Brand</StyledTableCell>
                <StyledTableCell>TotalAllowedQuantity</StyledTableCell>
                <StyledTableCell>MinOrderQuantity</StyledTableCell>
                <StyledTableCell>QualityStepSize</StyledTableCell>
                <StyledTableCell>WarrantyPeriod</StyledTableCell>
                <StyledTableCell>GuaranteePeriod</StyledTableCell>
                <StyledTableCell>DeliverableType</StyledTableCell>
                <StyledTableCell>DeliverableZipcodes</StyledTableCell>
                <StyledTableCell>HsnCode</StyledTableCell>
                <StyledTableCell>TaxIncludedPrice</StyledTableCell>
                <StyledTableCell>IsCodAllowed</StyledTableCell>
                <StyledTableCell>IsReturnAble</StyledTableCell>
                <StyledTableCell>IsCancelAble</StyledTableCell>
                <StyledTableCell>MRP</StyledTableCell>
                <StyledTableCell>CurrentPrice</StyledTableCell>
                <StyledTableCell>mainImage</StyledTableCell>
                <StyledTableCell>otherImage</StyledTableCell>
                <StyledTableCell>ProductVideo</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell>Edit</StyledTableCell>
                <StyledTableCell>Delete</StyledTableCell>
                <StyledTableCell>Hide/unhide</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {product.length === 0 ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={7} align="center">
                    No data available.
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                product.map((order) => (
                  <StyledTableRow key={order._id}>
                    <StyledTableCell>{order.productName}</StyledTableCell>
                    <StyledTableCell>{order.productType}</StyledTableCell>
                    <StyledTableCell>{order.shortDescription}</StyledTableCell>
                    <StyledTableCell>{order.tags}</StyledTableCell>
                    <StyledTableCell>{order.tax}</StyledTableCell>
                    <StyledTableCell>{order.indicator}</StyledTableCell>
                    <StyledTableCell>{order.madeIn}</StyledTableCell>
                    <StyledTableCell>{order.brand}</StyledTableCell>
                    <StyledTableCell>{order.totalAllowedQuantity}</StyledTableCell>
   
                    <StyledTableCell>{order.minOrderQuantity}</StyledTableCell>
   
                    <StyledTableCell>{order.qualityStepSize}</StyledTableCell>
   
                    <StyledTableCell>{order.warrantyPeriod}</StyledTableCell>
   
                    <StyledTableCell>{order.guaranteePeriod}</StyledTableCell>
   
                    <StyledTableCell>{order.deliverableType}</StyledTableCell>
   
                    <StyledTableCell>{order.deliverableZipcodes}</StyledTableCell>
                    <StyledTableCell>{order.hsnCode}</StyledTableCell>
                    <StyledTableCell>{order.taxIncludedPrice}</StyledTableCell>
                    <StyledTableCell>{order.isCodAllowed}</StyledTableCell>
                    <StyledTableCell>{order.isReturnAble}</StyledTableCell>
                    <StyledTableCell>{order.isCancelAble}</StyledTableCell>
                    <StyledTableCell>{order.mrp}</StyledTableCell>
                    <StyledTableCell>{order.currentPrice}</StyledTableCell>
                    <StyledTableCell>{order.mainImage}</StyledTableCell>
                    <StyledTableCell>{order.otherImage}</StyledTableCell>
                    <StyledTableCell>{order.productVideo}</StyledTableCell>
                    <StyledTableCell>{order.description}</StyledTableCell>
                    <StyledTableCell>
        <EditIcon />
       
    </StyledTableCell>
    <StyledTableCell>
       
        <DeleteIcon />
       
    </StyledTableCell>
    <StyledTableCell>
        
        <VisibilityIcon />
    </StyledTableCell>
   
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
