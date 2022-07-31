import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";
import "./Category.css";

function Category(props) {
  const naviagte = useNavigate();

  const handleNavigation = () => {
    naviagte("/products");
  };
  return (
    <div className="category">
      <div className="category--container">
        <h1>Kateqoriyalar</h1>
        <div className="categories">
          {props.categories.map((category) => (
            <div
              key={category.id}
              onClick={() => {
                props.onChangeCategory(category);
                handleNavigation();
              }}
            >
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
              <Button>→</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
