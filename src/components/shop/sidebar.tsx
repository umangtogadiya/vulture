import React, { useState } from "react";
import { Category } from "../../data/categorys";
import { brands } from "../../data/brands";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = useState(1);
  return (
    <div className="shop_sidebar_area">
      <div className="widget catagory mb-50">
        <h6 className="widget-title mb-30">Catagories</h6>
        <div className="catagories-menu">
          <ul id="menu-content2" className="menu-content collapse show">
            {Category.map((cate: any) => {
              return (
                <React.Fragment key={Math.random()}>
                  <li>
                    <a
                      onClick={() => {
                        setShow(cate.id);
                      }}
                    >
                      {cate.title}
                    </a>
                    <ul
                      className={`sub-menu collapse ${
                        show === cate.id ? "show" : ""
                      }`}
                    >
                      {cate.subCategory.map((sub: any) => {
                        return (
                          <React.Fragment key={Math.random()}>
                            <li>
                              <a>{sub.title}</a>
                            </li>
                          </React.Fragment>
                        );
                      })}
                    </ul>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <div className="widget price mb-50">
        <h6 className="widget-title mb-30">Filter by</h6>
        <p className="widget-title2 mb-30">Price</p>
        <div className="widget-desc">
          <div className="slider-range">
            <div
              data-min={49}
              data-max={360}
              data-unit="$"
              className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
              data-value-min={49}
              data-value-max={360}
              data-label-result="Range:"
            >
              <div className="ui-slider-range ui-widget-header ui-corner-all" />
              <span
                className="ui-slider-handle ui-state-default ui-corner-all"
                tabIndex={0}
              />
              <span
                className="ui-slider-handle ui-state-default ui-corner-all"
                tabIndex={0}
              />
            </div>
            <div className="range-price">Range: $49.00 - $360.00</div>
          </div>
        </div>
      </div>
      <div className="widget color mb-50">
        <p className="widget-title2 mb-30">Color</p>
        <div className="widget-desc">
          <ul className="d-flex">
            <li>
              <a href="#" className="color1" />
            </li>
            <li>
              <a href="#" className="color2" />
            </li>
            <li>
              <a href="#" className="color3" />
            </li>
            <li>
              <a href="#" className="color4" />
            </li>
            <li>
              <a href="#" className="color5" />
            </li>
            <li>
              <a href="#" className="color6" />
            </li>
            <li>
              <a href="#" className="color7" />
            </li>
            <li>
              <a href="#" className="color8" />
            </li>
            <li>
              <a href="#" className="color9" />
            </li>
            <li>
              <a href="#" className="color10" />
            </li>
          </ul>
        </div>
      </div> */}
      <div className="widget brands mb-50">
        <p className="widget-title2 mb-30">Brands</p>
        <div className="widget-desc">
          <ul>
            {brands.map((b) => {
              return (
                <React.Fragment key={Math.random()}>
                  <li key={Math.random()}>
                    <Link to="/shop">{b.title}</Link>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
