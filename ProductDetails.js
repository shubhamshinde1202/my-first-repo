import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/API";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    API.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  const {
    id: pid,
    title,
    description,
    image,
    price,
    category,
    rating,
  } = product;
  return (
    <>
      <div>
        <h3>Product Details</h3>
        <img src={image} style={{ width: 200, margin: 10 }} />
        <h3>
          {pid}
          {title}
        </h3>
        <h3>Price: {price}</h3>
        <h3>Category: {category}</h3>
        <h3>
          Rated {rating?.rate}by{rating?.count} customers
        </h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
