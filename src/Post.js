import React, { useState, useEffect } from "react";
import sanityClient from "./client.js";
import Card from "./Card.js";
import "./post.css";
function Post() {
  const [postdat, setpostdat] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="post"]{
        _id,
        title,
        slug,
        mainImage{
            asset->{
                url
            },
            alt
        }
    }`
      )
      .then((data) => setpostdat(data));
  }, []);

  return (
    <div className="Row">
      {" "}
      {postdat &&
        postdat.map((post, index) => (
          <Card
            key={post._id}
            id={post._id}
            img={post.mainImage.asset.url}
            title={post.title}
            slug={post.slug.current}
          />
        ))}
    </div>
  );
}

export default Post;
