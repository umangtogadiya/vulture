import React from "react";

const TopBar = (props: any) => {
  const { Img } = props;
  return (
    <div
      className="breadcumb_area bg-img"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12">
            <div className="page-title text-center">
              <h2>Checkout</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
