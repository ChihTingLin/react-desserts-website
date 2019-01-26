import React from "react";
import "./ProdList.css";

const ProdList = ({ data, activeIdx, onProdClick }) => {
  return (
    <div className="ProdList-wrapper">
      {data.map((prod, idx) => (
        <Prod {...prod} key={idx} onProdClick={() => onProdClick(idx)} />
      ))}
    </div>
  );
};

const Prod = ({ name, image, price, unit, onProdClick }) => {
  return (
    <React.Fragment>
      <div className="ProdList-prod" onClick={onProdClick}>
        <div className="ProdList-prodImg"
          style={{ backgroundImage: `url(${image})` }}>
        </div>
        <div className="ProdList-prodName">{name}</div>
        <div className="ProdList-prodPrice">${price}/{unit.text}</div>
      </div>
    </React.Fragment>
  );
};

export default ProdList;
