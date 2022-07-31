import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Navbar from "../navbar/Navbar";
import "./CartList.css";

function CartList(props) {
  const naviagte = useNavigate();

  const handleHome = () => {
    naviagte("/");
  };

  const handleProducts = () => {
    naviagte("/products");
  };
  return (
    <Fragment>
      <Navbar />
      <div className="cart--info">
        <div>
          <h1>Səbət</h1>
          <div>
            <p
              onClick={() => {
                handleHome();
              }}
            >
              Ana səhifə
            </p>
            <span>•</span>
            <span
              onClick={() => {
                handleProducts();
              }}
            >
              Məhsullar
            </span>
            <span>•</span>
            <span>Səbət</span>
          </div>
        </div>
      </div>
      <div className="cartt">
        <div className="cart--container">
          <div>
            <span>Məhsul</span>
            <span>Məhsulun adı</span>
            <span className="sayi">Sayı</span>
            <span>Qiymət</span>
            <span></span>
          </div>
          {props.cart.map((cartItem) => (
            <div key={cartItem.product.id}>
              <span>
                <img
                  src={cartItem.product.images}
                  alt={cartItem.product.title}
                />
              </span>
              <span className="desc">{cartItem.product.title}</span>
              <span className="quantity">
                <Button
                  onClick={() => {
                    props.onRemoveSingleFromCart(cartItem.product);
                  }}
                  className="buttons"
                >
                  -
                </Button>
                {cartItem.quantity}
                <Button
                  onClick={() => {
                    props.onAddToCart(cartItem.product);
                  }}
                  className="buttons"
                >
                  +
                </Button>
              </span>
              <span>${cartItem.quantity * cartItem.product.price}</span>
              <span>
                <Button
                  className="button"
                  onClick={() => props.onRemoveFromCart(cartItem.product)}
                >
                  ❌
                </Button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default CartList;
