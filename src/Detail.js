import React, { useState, useEffect } from "react";
import sanityClient from "./client.js";
import Info from "./Info.js";
import { useParams } from "react-router-dom";
function Detail() {
  const [detdata, setdetdata] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_id=="${id}"]{
        title,
        slug,
        mainImage{
            asset->{
                url
            },
            alt
            
        }, sideImage{
          asset->{
              url
          },
          alt
        }
    }`
      )
      .then((data) => setdetdata(data));
  }, []);

  return (
    <div>
      {detdata &&
        detdata.map((post, index) => (
          <Info
            key={post._id}
            img={post.mainImage.asset.url}
            img2={post.sideImage.asset.url}
            title={post.title}
          />
        ))}
      fsadfa
    </div>
  );
}

export default Detail;
