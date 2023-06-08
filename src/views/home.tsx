import React, { useEffect } from "react";
import Index from "../components/home";

const Home = () => {
  useEffect(() => {
    document.title = "Vulture | Clothing and Accessories | 100+ Brands";
  }, []);
  return <Index />;
};

export default Home;
