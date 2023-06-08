import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import ProductCard from "../shared/productCard";
import { products } from "../../data/product";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";

const Index = () => {
  return (
    <>
      <Header />
      <div
        className="breadcumb_area bg-img"
        style={{ backgroundImage: "url(/images/bg-img/breadcumb.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>dresses</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="shop_grid_area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-3">
              <Sidebar key={Math.random()} />
            </div>
            <div className="col-12 col-md-8 col-lg-9">
              <div className="shop_grid_product_area">
                <div className="row">
                  <div className="col-12">
                    <div className="product-topbar d-flex align-items-center justify-content-between">
                      <div className="total-products">
                        <p>
                          <span>{products.length}</span> products found
                        </p>
                      </div>
                      <div className="product-sorting d-flex">
                        <p>Sort by:</p>
                        <form action="#" method="get">
                          <select name="select" id="sortByselect">
                            <option value="value">Highest Rated</option>
                            <option value="value">Newest</option>
                            <option value="value">Price: $$ - $</option>
                            <option value="value">Price: $ - $$</option>
                          </select>
                          <input type="submit" className="d-none" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {products.map((product) => {
                    return (
                      <ProductCard
                        key={product.id}
                        product={product}
                        className="col-12 col-sm-6 col-lg-4"
                      />
                    );
                  })}
                </div>
              </div>
              <nav aria-label="navigation">
                <ul className="pagination mt-50 mb-70">
                  <li className="page-item">
                    <a className="page-link">
                      <i className="fa fa-angle-left" />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">...</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">21</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link">
                      <i className="fa fa-angle-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
