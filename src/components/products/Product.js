import React, { Fragment } from "react";
import Button from "../../UI/Button";
import Navbar from "../navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const naviagte = useNavigate();

  const filteredProducts = props.products.filter((product) => {
    return props.currentCategory === product.category.name;
  });

  const handleHome = () => {
    naviagte("/");
  };

  const handleSingleProduct = () => {
    naviagte("/singleproduct");
  };
  return (
    <Fragment>
      <Navbar />
      <div className="product--info">
        <div>
          <h1>Məhsullar</h1>
          <div>
            <p
              onClick={() => {
                handleHome();
              }}
            >
              Ana səhifə
            </p>
            <span>•</span>
            <span>Məhsullar</span>
          </div>
        </div>
      </div>
      <div className="product">
        <div className="product--container">
          <h1>{props.currentCategory}</h1>
          <div className="form">
            <h2>{filteredProducts.length} Məhsul</h2>
            <form>
              <div>
                <label>Qiymət: </label>
                <input type="number" min="1" placeholder="min" /> -
                <input type="number" min="1" placeholder="max" />
              </div>
              <div>
                <label>Kateqoriya: </label>
                <select>
                  <option>Bütün Məhsullar</option>
                  {props.categories.map((category) => (
                    <option key={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <Button className="button">Axtar</Button>
            </form>
          </div>
          <div className="products">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  props.onProductInfoHandler(product);
                }}
              >
                <img
                  onClick={() => {
                    handleSingleProduct();
                  }}
                  src={product.images}
                  alt={product.title}
                />
                <h4>{product.title}</h4>
                <span>{product.description}</span>
                <div>
                  <p>${product.price}</p>
                  <Button
                    onClick={() => {
                      props.onAddToCart(product);
                    }}
                  >
                    <FontAwesomeIcon icon={faCartShopping} />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Product;
