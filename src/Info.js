import "./info.css";
import React, { useState, useEffect } from "react";
import sanityClient from "./client.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
function Info({ img, img2, title, id }) {
  return (
    <div className="info">
      <Carousel className="slider">
        <div>
          <img src={img} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Carousel>

      <div className="back">
        <Link to="/">
          <svg
            width="38"
            height="38"
            viewBox="0 0 198 198"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="99" cy="99" r="99" fill="#DCD9D9" fill-opacity="0.6" />
            <line
              x1="96.7337"
              y1="155.976"
              x2="25.8786"
              y2="85.1213"
              stroke="black"
              stroke-width="12"
            />
            <path d="M26 88.855L96.855 18" stroke="black" stroke-width="12" />
            <path d="M32 87.5L186 88.0066" stroke="black" stroke-width="12" />
          </svg>
        </Link>
      </div>
      <div className="share2">
        <a
          href={`whatsapp://send?text=http://localhost:3000/${id}`}
          data-action="share/whatsapp/share"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 122 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.4" cx="61" cy="61" r="61" fill="#DCDBDB" />
            <path
              d="M77.5333 36.2C75.3408 36.2 73.2382 37.0709 71.6879 38.6212C70.1376 40.1715 69.2666 42.2742 69.2666 44.4666C69.2703 45.0477 69.3352 45.6268 69.4604 46.1942L50.6908 55.579C49.9167 54.6877 48.9607 53.9726 47.887 53.4818C46.8134 52.9909 45.6471 52.7357 44.4666 52.7333C42.2742 52.7333 40.1715 53.6042 38.6212 55.1545C37.0709 56.7048 36.2 58.8075 36.2 61C36.2 63.1924 37.0709 65.2951 38.6212 66.8454C40.1715 68.3957 42.2742 69.2666 44.4666 69.2666C45.6475 69.2653 46.8144 69.011 47.8887 68.5208C48.9631 68.0306 49.9199 67.316 50.6949 66.425L69.4523 75.8057C69.3299 76.3734 69.2676 76.9525 69.2666 77.5333C69.2666 79.7257 70.1376 81.8284 71.6879 83.3787C73.2382 84.929 75.3408 85.7999 77.5333 85.7999C79.7257 85.7999 81.8284 84.929 83.3787 83.3787C84.929 81.8284 85.7999 79.7257 85.7999 77.5333C85.7999 75.3408 84.929 73.2382 83.3787 71.6879C81.8284 70.1376 79.7257 69.2666 77.5333 69.2666C76.3524 69.2679 75.1855 69.5223 74.1112 70.0124C73.0368 70.5026 72.08 71.2173 71.305 72.1083L52.5476 62.7276C52.67 62.1598 52.7323 61.5807 52.7333 61C52.7293 60.4202 52.6644 59.8425 52.5395 59.2764L71.3091 49.8916C72.0836 50.7821 73.0398 51.4965 74.1134 51.9866C75.187 52.4768 76.3531 52.7314 77.5333 52.7333C79.7257 52.7333 81.8284 51.8623 83.3787 50.312C84.929 48.7617 85.7999 46.6591 85.7999 44.4666C85.7999 42.2742 84.929 40.1715 83.3787 38.6212C81.8284 37.0709 79.7257 36.2 77.5333 36.2Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
      <div className="priceinfo">
        <h6 className="name">
          <b>Itemsffg</b>dgsdgdg
        </h6>
        <h6 className="name2">sfsdfd</h6>
        <div className="pricedet">
          <p> &#x20b9; 9,500 </p> <b>&#x20b9; 7,500</b>{" "}
        </div>
      </div>
      <div className="quality">
        <div className="emi">
          <h5>EMI Option Available</h5>
          <p>
            <b>contact</b>
          </p>
        </div>
        <p>Starting from 1399/month</p>
      </div>
    </div>
  );
}

export default Info;
