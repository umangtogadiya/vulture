import Index from "../components/working";
import React, { useEffect } from "react";

const Working = () => {
  useEffect(() => {
    document.title = "Page is in Working";
  }, []);
  return <Index />;
};

export default Working;
