import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayProduct   from './DisplayProduct'
const ProductList = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:4001/api/v1/get_all_Product');
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchProducts();
    }, []);
  
    return (
      <div>
        <h2>Product List</h2>
        {products.map((product) => (
          <DisplayProduct key={product._id} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductList;