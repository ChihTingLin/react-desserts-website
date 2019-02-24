import React, { useState } from "react";
import cartIcon from '../static/images/shopping-cart.svg'

const ShoppingCart = ({ cartDetail, onRemoveItemClick}) => {
  let [cartOpen, toggleCart] = useState(false)
  const storeData = () => {
    if(cartDetail.items.length > 0) {
      localStorage.setItem('PURCHASE_LIST', JSON.stringify(cartDetail))
    } 
  }
  return (
    <div className="ShoppingCart-wrapper">
        <img src={cartIcon} className="ShoppingCart-icon" alt="shopping-cart" onClick={() => toggleCart(!cartOpen)}/>
        ({cartDetail.items.length})
        <div className={cartOpen ? "ShoppingCart-brief" : "ShoppingCart-hidden"}>
          <div className="ShoppingCart-line">
            <div>商品名稱</div>
            <div>數量</div>
            <div>刪除</div>
          </div>
          {cartDetail.items.length > 0 && (
            <React.Fragment>
            {cartDetail.items.map((detail, idx) => (
              <div key={idx} className="ShoppingCart-line">
                <div>{detail.name}</div>
                <div>{detail.qty}</div>
                <div className="ShoppingCart-remove"  onClick={() => onRemoveItemClick(idx)}>X</div>
              </div>
            ))}
              <div className="ShoppingCart-line">小計 {cartDetail.totalPrice} 元</div>
              <button onClick={storeData}>結帳</button>
            </React.Fragment>
          )}
          {
            cartDetail.items.length === 0 && <div className="ShoppingCart-line">空空的購物車...</div>
          }
        </div>
    </div>
  );
};

export default ShoppingCart;
