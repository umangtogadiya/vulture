import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementProduct,
  reduceProduct,
} from "../../redux/slices/cart";
import { toast } from "react-toastify";

const slideStyle = {
  width: "255px",
  marginRight: "30px",
};

// const inputCSS = {
//   textAlign: "center" as "center",
//   width: "50px",
// };

const ProductCard = (props: any) => {
  const product = props.product;
  const cart = useSelector((state: any) => state.cartItems.cart);
  const dispatch = useDispatch();

  const [added, setAdded] = useState(false);
  const [addedQty, setAddedQty] = useState(0);
  useEffect(() => {
    const alreadyAdded = cart.find((p: any) => p.id === parseInt(product.id));
    if (alreadyAdded) {
      setAdded(true);
      setAddedQty(alreadyAdded.qty);
    } else {
      setAdded(false);
    }
  }, [cart, product]);

  const handleQtyUpdate = (item: any, type: boolean) => {
    type ? dispatch(incrementProduct(item)) : dispatch(reduceProduct(item));
  };

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
    toast.success(`${product?.name.slice(0, 20)} is added to cart`, {
      autoClose: 1200,
    });
  };

  return (
    <div className="single-product-wrapper" style={slideStyle}>
      <div className="product-img">
        <img src={`${product.images[0]}`} alt="" />
        <img className="hover-img" src={`${product.images[1]}`} alt="" />
        {product.discount > 0 && (
          <div className="product-badge offer-badge">
            <span>{product.discount}%</span>
          </div>
        )}
        <div className="product-favourite">
          <a className="favme fa fa-heart" />
        </div>
      </div>
      <div className="product-description">
        <span>{product.category}</span>
        <Link to={`/product/${product.id}`}>
          <h6>{product.name}</h6>
        </Link>
        <p className="product-price">
          {product.discount > 0 && (
            <span className="old-price">
              $
              {(product.price * product.discount) / 100 +
                parseFloat(product.price)}
            </span>
          )}
          $ {product.price}
        </p>
        <div className="hover-content">
          {!added ? (
            <div className="add-to-cart-btn">
              <a
                onClick={() => addToCartItem(product)}
                className="btn vulture-btn"
              >
                Add to Cart
              </a>
            </div>
          ) : (
            <div className="add-to-cart-btn">
              <Link to={`/product/${product.id}`} className="btn vulture-btn">
                View
              </Link>
            </div>
            // <div className="cart-fav-box d-flex align-items-center">
            //   <button
            //     className="btn btn-primary mr-2"
            //     onClick={() => handleQtyUpdate(product, true)}
            //   >
            //     +
            //   </button>
            //   <div>
            //     <input
            //       type="text"
            //       value={addedQty}
            //       readOnly
            //       className="form-control"
            //       style={inputCSS}
            //     />
            //   </div>
            //   <button
            //     className="btn btn-primary ml-2"
            //     onClick={() => handleQtyUpdate(product, false)}
            //   >
            //     -
            //   </button>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
