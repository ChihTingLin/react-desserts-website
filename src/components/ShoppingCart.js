import React from "react";
import cartIcon from '../static/images/shopping-cart.svg'

const ShoppingCart = ({ qty=0 }) => {
  return (
    <div className="ShoppingCart-wrapper">
        <img src={cartIcon} className="ShoppingCart-icon" alt="shopping-cart"/>
        ({qty})
    </div>
  );
};

export default ShoppingCart;
