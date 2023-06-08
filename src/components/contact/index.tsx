import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const Index = () => {
  return (
    <>
      <Header />
      <div className="contact-area d-flex align-items-center">
        <div className="google-map">
          <div id="googleMap" />
        </div>
        <div className="contact-info">
          <h2>How to Find Us</h2>
          <p>
            Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla
            ante. Aenean finibus velit id urna vehicula, nec maximus est
            sollicitudin.
          </p>
          <div className="contact-address mt-50">
            <p>
              <span>address:</span> 10 Suffolk st Soho, London, UK
            </p>
            <p>
              <span>telephone:</span> +12 34 567 890
            </p>
            <p>
              <a href="mailto:contact@essence.com">contact@essence.com</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
