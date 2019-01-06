import React from "react";
import "./ProdList.css";

const ProdList = ({ data }) => {
  return (
    <div className="ProdList-wrapper">
      {data.map((prod, idx) => (
        <Prod {...prod} key={idx} />
      ))}
    </div>
  );
};

const Prod = ({ name, image, price, ingredients, description, unit }) => {

  return (
    <div className="ProdList-prodWrapepr">
      <div className="ProdList-prodImg"
        style={{ backgroundImage: `url(${image})` }}>
      </div>
      <div className="ProdList-prodName">{name}</div>
      <div className="ProdList-prodPrice">${price}/{unit.text}</div>
    </div>
  );
};

export default ProdList;
