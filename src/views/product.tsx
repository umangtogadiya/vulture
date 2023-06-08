import Index from "../components/product";
import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  return <Index id={id} />;
};

export default Product;
