import React from 'react'

const ProdDetail = ({ name, category, image, price, ingredients, description, unit, qty, onCounterClick, counter, onAddToCartClick }) => {
  return (
    <div className="ProdDetail-wrapper">
      <div className="ProdDetail-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="ProdDetail-description">{description}</div>
      </div>
      <div className="ProdDetail-info">
        <div className="ProdDetail-name">{name}</div>
        <span className="ProdDetail-cat">{category}</span>
        <div className="ProdDetail-ingredients">原料:<br />{ingredients.join('、')}</div>
        <div>{price}元 / {unit.text}</div>
        <Counter onCounterClick={(val) => onCounterClick(val)} count={counter}/>
        {counter * price !== 0 && (
          <div>小計 <span className="ProdDetail-total">{counter * price}</span> 元 <br/>
            <button className="ProdDetail-add" 
            onClick={() => onAddToCartClick({name, image, unitPrice: price, qty: counter, total: counter * price})}>
              加入購物車
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

const Counter = ({ onCounterClick, count }) => (
  <div className="ProdDetail-counter">
    <button onClick={() => onCounterClick(-1)}>-</button>
    <input className="ProdDetail-counter" value={count} readOnly />
    <button onClick={() => onCounterClick(1)}>+</button>
  </div>
)

export default ProdDetail