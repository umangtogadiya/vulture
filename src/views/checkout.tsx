import Index from "../components/checkout";
import React, { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
  }, []);
  return <Index />;
};

export default Checkout;
