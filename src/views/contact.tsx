import Index from "../components/contact";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return <Index />;
};

export default Contact;
