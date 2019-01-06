import React from "react";
import "./Carousel.css";

const Carousel = ({ images, image, length, active, onDotClick }) => {
  const imgArr = [...Array(length)];
  return (
    <div className="Carousel-wrapper" style={{ backgroundImage: `url(${image.src})` }}>
      <div className="Carousel-dotWrapper">
        {imgArr.map((img, idx) => (
          <div
            key={idx}
            className={
              idx === active
                ? "Carousel-dot Carousel-dotActive"
                : "Carousel-dot"
            }
            onClick={() => onDotClick(idx)}
          />
        ))}
      </div>
      {/*<div className="Carousel-imageWrapper">
        {images.map((image, idx) => (
          <img src={image.src} />
        ))}
      </div>*/}
      {/* <img src={image.src} alt="" /> */}
    </div>
  );
};

export default Carousel;
