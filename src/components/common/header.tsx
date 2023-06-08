import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementProduct,
  reduceProduct,
} from "../../redux/slices/cart";
import "./button.css";

const autoScroll = {
  overflow: "auto",
};

const pointer = {
  cursor: "pointer",
};

const logoStye = {
  width: "22%",
};

const Header = () => {
  const cart = useSelector((state: any) => state.cartItems.cart);
  const dispatch = useDispatch();

  const [cartClass, setCartClass] = useState("");
  const [bgClass, setBgClass] = useState("");

  const handleClick = () => {
    cartClass ? setCartClass("") : setCartClass("cart-on");
    bgClass ? setBgClass("") : setBgClass("cart-bg-overlay-on");
  };

  const [subTotal, setSubTotal] = useState("0");
  const [total, setTotal] = useState("0");

  const cartCalculation = () => {
    let subTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      subTotal += parseFloat(cart[i].price) * cart[i].qty;
    }
    setSubTotal(subTotal.toFixed(2));
    setTotal(subTotal.toFixed(2));
  };

  useEffect(() => {
    cartCalculation();
    if (cart.length === 0 && (cartClass !== "" || bgClass !== "")) {
      setCartClass("");
      setBgClass("");
    }
  }, [cart]);

  const removeCartItem = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const handleQtyUpdate = (item: any, type: boolean) => {
    type ? dispatch(incrementProduct(item)) : dispatch(reduceProduct(item));
  };

  return (
    <>
      <header className="header_area" key={Math.random()}>
        <div className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">
          <nav className="classy-navbar" id="essenceNav">
            <Link className="nav-brand" to="/" style={logoStye}>
              <img src="/images/core-img/logo.png" alt="" />
            </Link>
            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top" />
                  <span className="bottom" />
                </div>
              </div>
              <div className="classynav">
                <ul>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="header-meta d-flex clearfix justify-content-end">
            <div className="search-area">
              <form>
                <input
                  type="search"
                  name="search"
                  id="headerSearch"
                  placeholder="Type for search"
                />
                <button>
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
            </div>
            <div className="favourite-area">
              <Link to="/working">
                <img src="/images/core-img/heart.svg" alt="" />
              </Link>
            </div>
            <div className="user-login-info">
              <Link to="/working">
                <img src="/images/core-img/user.svg" alt="" />
              </Link>
            </div>
            <div className="cart-area">
              <a
                onClick={() => {
                  if (cart.length > 0) {
                    handleClick();
                  }
                }}
              >
                <img src="/images/core-img/bag.svg" alt="" />
                <span>{cart.length}</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className={`cart-bg-overlay ${bgClass}`} onClick={handleClick} />
      <div className={`right-side-cart-area ${cartClass}`}>
        <div className="cart-button">
          <a onClick={handleClick}>
            <img src="/images/core-img/bag.svg" alt="" />
            <span>{cart.length}</span>
          </a>
        </div>
        <div className="cart-content d-flex">
          <div className="cart-list" style={autoScroll}>
            {cart.map((cartItem: any) => {
              return (
                <React.Fragment key={cartItem.id}>
                  <div className="single-cart-item">
                    <div className="product-image">
                      <img
                        src={`${cartItem.image}`}
                        className="cart-thumb"
                        alt=""
                      />
                      <div className="cart-item-desc">
                        <span
                          className="product-remove"
                          onClick={() => removeCartItem(cartItem.id)}
                          style={pointer}
                        >
                          <i className="fa fa-close" aria-hidden="true" />
                        </span>
                        <span className="badge">{cartItem.category}</span>
                        <h6>{cartItem.title}</h6>
                        <p className="size">Size: {cartItem.size}</p>
                        <p className="color">Color: {cartItem.color}</p>
                        <div className="quantity-cart">
                          <button
                            className="plus-btn cart-btn"
                            type="button"
                            onClick={() => handleQtyUpdate(cartItem, true)}
                          >
                            <img
                              src="https://designmodo.com/demo/shopping-cart/plus.svg"
                              alt=""
                            />
                          </button>
                          <input
                            type="text"
                            name="name"
                            value={cartItem.qty}
                            readOnly
                          />
                          <button
                            className="minus-btn cart-btn"
                            type="button"
                            onClick={() => handleQtyUpdate(cartItem, false)}
                          >
                            <img
                              src="https://designmodo.com/demo/shopping-cart/minus.svg"
                              alt=""
                            />
                          </button>
                        </div>
                        <p className="price">
                          ${cartItem.price * cartItem.qty}
                        </p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="cart-amount-summary">
            <h2>Summary</h2>
            <ul className="summary-table">
              <li>
                <span>subtotal:</span> <span>${subTotal}</span>
              </li>
              <li>
                <span>delivery:</span> <span>Free</span>
              </li>
              {/* <li>
                <span>discount:</span> <span>-15%</span>
              </li> */}
              <li>
                <span>total:</span> <span>${total}</span>
              </li>
            </ul>
            <div className="checkout-btn mt-100">
              <a href="checkout.html" className="btn vulture-btn">
                check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
