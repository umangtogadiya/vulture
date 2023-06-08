import Index from "../components/product";
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/product";
import PageNotFound from "./pagenotfound";

const Product = () => {
  const { id } = useParams();
  const productDetails = products.find(
    (product) => product.id === parseInt(id ?? "")
  );
  if (productDetails) {
    return <Index id={id} />;
  } else {
    return <PageNotFound />;
  }
};

export default Product;
