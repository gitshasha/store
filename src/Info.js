import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Info({ img, img2, title }) {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Carousel>
    </div>
  );
}

export default Info;
