import { Fragment, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/categories/Category";
import Header from "./components/header/Header";
import Product from "./components/products/Product";
import alertify from "alertifyjs";
import Footer from "./components/footer/Footer";
import CartList from "./components/cartlist/CartList";
import SingleProduct from "./components/singleproduct/SingleProduct";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ForgotPassword from "./components/forgotpassword/ForgotPassword";

function App() {
  const [currentCategory, setCurrentCategory] = useState([]);
  const [currentProduct, setCurrentProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const changeCategory = (category) => {
    setCurrentCategory(category.name);
  };

  const productInfoHandler = (product) => {
    setCurrentProduct(product.id);
  };

  const getCategories = () => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  };

  const getProducts = (id) => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const addToCart = (product) => {
    let newCart = cart;
    let addedItem = newCart.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
    alertify.success(product.title + " added to cart", 2);
  };

  const removeSingleFromCart = (product) => {
    let newCart = cart;
    let addedItem = newCart.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (addedItem) {
      addedItem.quantity -= 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    setCart(newCart);
    alertify.error("1 " + product.title + " removed", 2);
  };

  const removeFromCart = (product) => {
    let newCart = cart.filter((cartItem) => cartItem.product.id !== product.id);
    setCart(newCart);
    alertify.error(product.title + " removed from cart", 2);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Category
                  categories={categories}
                  products={products}
                  currentCategory={currentCategory}
                  onChangeCategory={changeCategory}
                />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <Product
                categories={categories}
                onAddToCart={addToCart}
                currentCategory={currentCategory}
                products={products}
                onProductInfoHandler={productInfoHandler}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartList
                onRemoveSingleFromCart={removeSingleFromCart}
                onRemoveFromCart={removeFromCart}
                onAddToCart={addToCart}
                cart={cart}
              />
            }
          />
          <Route
            path="/singleproduct"
            element={
              <SingleProduct
                currentProduct={currentProduct}
                products={products}
                onAddToCart={addToCart}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Fragment>
  );
}

export default App;
