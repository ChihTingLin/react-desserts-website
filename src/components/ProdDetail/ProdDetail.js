import React from 'react'
import './ProdDetail.css'

const ProdDetail = ({ name, category, image, price, ingredients, description, unit, qty, onCounterClick, counter }) => {
  return (
    <div className="ProdDetail-wrapper">
      <div className="ProdDetail-image" style={{ backgroundImage: `url(${image})` }}>
        <div className="ProdDetail-description">{description}</div>
      </div>
      <div className="ProdDetail-info">
        <div className="ProdDetail-name">{name}</div>
        <span className="ProdDetail-cat">{category}</span>
        <div className="ProdDetail-ingredients">原料:<br />{ingredients.join('、')}</div>
        <div className="ProdDetail-price">
          <button onClick={() => onCounterClick(-1)}>-</button>
          <input className="ProdDetail-counter" value={counter} readOnly />
          <button onClick={() => onCounterClick(1)}>+</button>
          {price}元 / {unit.text}
        </div>
      </div>
    </div>
  )
}

export default ProdDetail