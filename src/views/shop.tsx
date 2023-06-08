import React, { useEffect } from "react";
import Index from "../components/shop";

const Shop = () => {
  useEffect(() => {
    document.title = "Shopping";
  }, []);
  return <Index />;
};

export default Shop;
