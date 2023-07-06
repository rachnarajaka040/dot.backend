import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { addProduct } from "../../apis/users";
import AdminLayout from '../Layout/AdminLayout';
const ProductForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [data, setData] = useState({});

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormInput = (e) => {
    e.preventDefault();
    console.log(data);
    addProduct(data);
    console.log(addProduct(data) + 'database');
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminLayout>
        <Box m="20px" width="80%">

          {/* <h2>Add Product</h2> Heading Section */}
          <form onSubmit={handleFormInput}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                name="productName"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Description"
                name="product Description"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="Text"
                label="Price"
                name="price"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Category"
                name="category"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tags"
                name="Tags"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Tax"
                name="Tax"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="Text"
                label="Indicator"
                name="Indicator"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="MadeIn"
                name="MadeIn"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Brand"
                name="Brand"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="QualityStepSize"
                name="QualityStepSize"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="Text"
                label="DeliverableType"
                name="DeliverableType"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="isCodAllowed"
                name="isCodAllowed"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                name="productName"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="isReturnAble"
                name="isReturnAble"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="Text"
                label="isCancelAble"
                name="isCancelAble"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="mrp"
                name="mrp"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="currentPrice"
                name="currentPrice"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="mainImage"
                name="mainImage"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="otherImage"
                name="otherImage"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="description"
                name="description"
                sx={{ gridColumn: "span 2" }}
                onChange={handleChange}
              />
              {/* Add more TextField components based on the schema fields */}
            </Box>
            <Box display="flex" justifyContent="start" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                sx={{

                  color: "black",
                  borderRadius: '4px',
                  padding: '5px 12px',

                  border: 'none',
                  cursor: 'pointer',
                  "&:hover": {
                    backgroundColor: "dark",
                  },
                }}
              >
                Add Product
              </Button>



            </Box>




          </form>
        </Box>
      </AdminLayout>
    </div>
  );
};

export default ProductForm;
