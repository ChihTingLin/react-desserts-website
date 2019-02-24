import React, { useState } from "react";

const Carousel = ({ images }) => {
  let [active, setActive] = useState(0)
  const imgArr = [...Array(images.length)];
  return (
    <div className="Carousel-wrapper" style={{ backgroundImage: `url(${images[active].src})` }}>
      <div className="Carousel-dotWrapper">
        {imgArr.map((img, idx) => (
          <div
            key={idx}
            className={
              idx === active
                ? "Carousel-dot Carousel-dotActive"
                : "Carousel-dot"
            }
            onClick={() => setActive(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
