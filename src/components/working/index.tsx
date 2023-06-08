import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const Index = () => {
  const container = {
    display: "flex",
    "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    height: "90vh",
  };
  const image = {
    maxWidth: "300px",
  };
  return (
    <>
      <Header />
      <div className="container" style={container}>
        <img
          src="https://www.pngplay.com/wp-content/uploads/6/Under-Construction-Road-Cones-PNG.png"
          alt="Under Construction"
          className="img-fluid mb-4"
          style={image}
        />
        <h1 className="mb-3">Under Construction</h1>
        <p className="lead">
          We are currently working on this page.
          <br /> Please check back soon!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Index;
