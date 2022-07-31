import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import Navbar from "../navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./SingleProduct.css";

function SingleProduct(props) {
  const naviagte = useNavigate();

  const singleProduct = props.products.filter((product) => {
    return props.currentProduct === product.id;
  });

  const handleHome = () => {
    naviagte("/");
  };

  const handleProducts = () => {
    naviagte("/products");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="single--product-info">
        <div>
          <h1>Məhsul</h1>
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
            <span>Məhsul</span>
          </div>
        </div>
      </div>
      <div className="single--product">
        {singleProduct.map((product) => (
          <div key={product.id} className="single--product-container">
            <div>
              <img src={product.images} alt={product.title} />
            </div>
            <div>
              <h1>{product.title}</h1>
              <span className="eded">1 ədəd</span>
              <p>{product.description}</p>
              <div>
                <span className="price">${product.price}</span>
                <Button
                  onClick={() => {
                    props.onAddToCart(product);
                  }}
                  className="button"
                >
                  Səbətə əlavə edin <FontAwesomeIcon icon={faCartShopping} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default SingleProduct;
