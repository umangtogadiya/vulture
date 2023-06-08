import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { products } from "../../data/product";
import { brands } from "../../data/brands";
import ProductSlider from "./productSlider";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Header />
      <section
        className="welcome_area bg-img background-overlay"
        style={{ backgroundImage: "url(/images/bg-img/bg-1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="hero-content">
                <h6>asoss</h6>
                <h2>New Collection</h2>
                <Link to="/shop" className="btn essence-btn">
                  view collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="top_catagory_area section-padding-80 clearfix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(/images/bg-img/bg-2.jpg)" }}
              >
                <div className="catagory-content">
                  <Link to="/shop">Clothing</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(/images/bg-img/bg-3.jpg)" }}
              >
                <div className="catagory-content">
                  <Link to="/shop">Shoes</Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div
                className="single_catagory_area d-flex align-items-center justify-content-center bg-img"
                style={{ backgroundImage: "url(/images/bg-img/bg-4.jpg)" }}
              >
                <div className="catagory-content">
                  <Link to="/shop">Accessories</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="cta-content bg-img background-overlay"
                style={{ backgroundImage: "url(/images/bg-img/bg-5.jpg)" }}
              >
                <div className="h-100 d-flex align-items-center justify-content-end">
                  <div className="cta--text">
                    <h6>-60%</h6>
                    <h2>Global Sale</h2>
                    <Link to="/shop" className="btn essence-btn">
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="new_arrivals_area section-padding-80 clearfix">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading text-center">
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ProductSlider
                className="popular-products-slides"
                products={products}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="brands-area d-flex align-items-center justify-content-between">
        {brands.map((brand: any) => {
          return (
            <>
              <div className="single-brands-logo">
                <img src={brand.img} alt={brand.title} />
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Index;
