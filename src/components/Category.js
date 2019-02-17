import React from "react";

const Category = ({ list, activeIdx, onCategoryClick }) => {
  return (
    <div className="Category-wrapper">
      {list.map((cat, idx) => (
        <CategoryBtn
          title={cat.title}
          isActive={activeIdx === idx}
          image={cat.image}
          key={idx}
          onBtnClick={() => onCategoryClick(idx)}
        />
      ))}
    </div>
  );
};

const CategoryBtn = ({ title, onBtnClick, isActive, image }) => {
  return (
    <div
      className="Category-btn"
      style={{ backgroundImage: `url(${image})` }}
      onClick={onBtnClick}
    >
      <h3
        className="Category-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {isActive && <div className="Category-mask" />}
    </div>
  );
};

export default Category;
