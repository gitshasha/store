import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card({ img, title, id }) {
  return (
    <div>
      <div className="card">
        <Link to={`/${id}`}>
          <img src={img} alt="" />
        </Link>
        <h3 className="title">{title}</h3>
        <h5 className="price">
          Price &#x20b9; <p>9500 </p> <b>&#x20b9; 7500</b>{" "}
        </h5>
        <div className="share">
          <a
            href={`whatsapp://send?text=http://localhost:3000/${id}`}
            data-action="share/whatsapp/share"
          >
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
