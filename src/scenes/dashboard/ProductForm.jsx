import React from "react";
import { Box, Button, TextField } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";


const ProductForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  };

  return (
    <Box m="20px">
     
     {/* <h2>Add Product</h2> Heading Section */}
      <form onSubmit={handleSubmit}>
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
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Description"
            name="productDescription"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="Text"
            label="Price"
            name="price"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Category"
            name="category"
            sx={{ gridColumn: "span 2" }}
          />
           <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Tags"
            name="Tags"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Tax"
            name="Tax"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="Text"
            label="Indicator"
            name="Indicator"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="MadeIn"
            name="MadeIn"
            sx={{ gridColumn: "span 2" }}
          />
           <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Brand"
            name="Brand"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="QualityStepSize"
            name="QualityStepSize"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="Text"
            label="DeliverableType"
            name="DeliverableType"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Category"
            name="category"
            sx={{ gridColumn: "span 2" }}
          />
           <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Name"
            name="productName"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Product Description"
            name="productDescription"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="Text"
            label="Price"
            name="price"
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Category"
            name="category"
            sx={{ gridColumn: "span 2" }}
          />
          {/* Add more TextField components based on the schema fields */}
        </Box>
        <Box display="flex" justifyContent="start" mt="20px">
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            sx={{
              backgroundColor:"white",
              color:"black",
              borderRadius: '4px',
              padding: '5px 12px',
              backgroundColor: 'white',
              border: 'none',
              cursor: 'pointer',
              "&:hover": {
                backgroundColor:"dark",
              },
            }}
          >
            Add Product
          </Button>


          
        </Box>




      </form>
    </Box>
  );
};

export default ProductForm;
