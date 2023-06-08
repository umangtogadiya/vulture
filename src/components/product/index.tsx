import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { products } from "../../data/product";
import ImageSlider from "./slider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addToCart,
  incrementProduct,
  reduceProduct,
} from "../../redux/slices/cart";
import { toast } from "react-toastify";

const inputCSS = {
  textAlign: "center" as "center",
  width: "50px",
};

const Index = (props: any) => {
  const { id } = props;
  const cart = useSelector((state: any) => state.cartItems.cart);
  const dispatch = useDispatch();

  const productDetails = products.find(
    (product) => product.id === parseInt(id)
  );
  useEffect(() => {
    document.title = productDetails?.name ?? "Demo Product";
  }, []);

  const [added, setAdded] = useState(false);
  const [addedQty, setAddedQty] = useState(0);
  useEffect(() => {
    const alreadyAdded = cart.find((p: any) => p.id === parseInt(id));
    if (alreadyAdded) {
      setAdded(true);
      setAddedQty(alreadyAdded.qty);
    } else {
      setAdded(false);
    }
  }, [cart, id]);

  const addToCartItem = (item: any) => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.name,
        category: item.category,
        price: item.price,
        qty: 1,
        size: "S",
        color: "Red",
        image: item.images[0],
        productDetails: { ...item },
      })
    );
    toast.success(`${item?.name.slice(0, 20)} is added to cart`, {
      autoClose: 1200,
    });
  };

  const handleQtyUpdate = (item: any, type: boolean) => {
    type ? dispatch(incrementProduct(item)) : dispatch(reduceProduct(item));
    toast.success(`${item?.name.slice(0, 20)} updated.`, {
      autoClose: 1200,
    });
  };
  return (
    <>
      <Header />
      <section className="single_product_details_area d-flex">
        <ImageSlider
          className="single_product_thumb clearfix"
          images={productDetails?.images}
        />
        <div className="single_product_desc clearfix">
          <span>{productDetails?.category}</span>
          <Link to={`/product/${productDetails?.id}`}>
            <h2>{productDetails?.name}</h2>
          </Link>
          <p className="product-price">
            <span className="old-price">${productDetails?.discount}</span>$
            {productDetails?.price}
          </p>
          <p className="product-desc">{productDetails?.description}</p>
          <div className="cart-form clearfix">
            <div className="mt-50 mb-30">
              <span>Size: {productDetails?.sizes}</span>
              <br />
              <span>Color: {productDetails?.color}</span>
            </div>
            {!added ? (
              <div className="cart-fav-box d-flex align-items-center">
                <button
                  onClick={() => addToCartItem(productDetails)}
                  className="btn essence-btn"
                >
                  Add to cart
                </button>
                <div className="product-favourite ml-4">
                  <a className="favme fa fa-heart" />
                </div>
              </div>
            ) : (
              <div className="cart-fav-box d-flex align-items-center">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => handleQtyUpdate(productDetails, true)}
                >
                  +
                </button>
                <div>
                  <input
                    type="text"
                    value={addedQty}
                    readOnly
                    className="form-control"
                    style={inputCSS}
                  />
                </div>
                <button
                  className="btn btn-primary ml-2"
                  onClick={() => handleQtyUpdate(productDetails, false)}
                >
                  -
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;
