import React from "react";
const DisplayProduct = ({ product }) => {
  return (
    <div>
      <h4>{product.productName}</h4>
      <p>Product Type: {product.productType}</p>
      <p>Short Description: {product.shortDescription}</p>
      <p>Tags: {product.tags}</p>
      <p>Tax: {product.tax}</p>
      <p>Indicator: {product.indicator}</p>
      <p>Brand: {product.brand}</p>
      <p>Quality Step Size: {product.qualityStepSize}</p>
      <p>Deliverable Type: {product.deliverableType}</p>
      <p>Deliverable Zipcodes: {product.deliverableZipcodes}</p>
      <p>Is COD Allowed: {product.isCodAllowed ? 'Yes' : 'No'}</p>
      <p>Is Returnable: {product.isReturnAble ? 'Yes' : 'No'}</p>
      <p>Is Cancelable: {product.isCancelAble ? 'Yes' : 'No'}</p>
      <p>MRP: {product.mrp}</p>
      <p>Current Price: {product.currentPrice}</p>
      <p>Main Image: {product.mainImage}</p>
      <p>Other Image: {product.otherImage}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};
export default DisplayProduct