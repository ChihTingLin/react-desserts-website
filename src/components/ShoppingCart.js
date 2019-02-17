import React from "react";
import cartIcon from '../static/images/shopping-cart.svg'

const ShoppingCart = ({ cartDetail=[], cartOpen, onShoppingCartClick }) => {
  return (
    <div className="ShoppingCart-wrapper">
        <img src={cartIcon} className="ShoppingCart-icon" alt="shopping-cart" onClick={onShoppingCartClick}/>
        ({cartDetail.length})
        <div className={cartOpen ? "ShoppingCart-brief" : "ShoppingCart-hidden"}>
          <div className="ShoppingCart-line">
            <div>商品名稱</div>
            <div>數量</div>
          </div>
          {cartDetail.length > 0 && (
            <React.Fragment>
            {cartDetail.map((detail, idx) => (
              <div key={idx} className="ShoppingCart-line">
                <div>{detail.name}</div>
                <div>{detail.qty}</div>
              </div>
            ))}
              <button>結帳</button>
            </React.Fragment>
          )}
          {
            cartDetail.length === 0 && <div className="ShoppingCart-line">空空的購物車...</div>
          }
        </div>
    </div>
  );
};

export default ShoppingCart;
