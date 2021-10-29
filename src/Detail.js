import React, { useState, useEffect } from "react";
import sanityClient from "./client.js";
import Info from "./Info.js";
import { useParams } from "react-router-dom";
import Card from "./Card.js";
import "./details.css";
function Detail() {
  const [detdata, setdetdata] = useState(null);
  const [authdata, setauthdata] = useState(null);
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
        },
        author->{
          _id,
        }
    }`
      )
      .then((data) => setdetdata(data));
  }, []);

  useEffect(() => {
    if (detdata == null) {
      sanityClient
        .fetch(
          `*[_type=="author"]{
            _id,
            name,
      "post": *[_type == "post" && references(^._id)]{
      title,_id,mainImage{asset->{url}}
      }
        }`
        )
        .then((data) => setauthdata(data));
    }
  }, []);
  let a = [];
  if (authdata != null) {
    authdata.map((author) => {
      a.push(author.post);
    });
  }
  let b = [];
  if (a != []) {
    a.map((ide) => {
      ide.map((ides) => {
        if (ides._id === id) {
          b = ide;
        }
      });
    });
  }
  console.log(b);
  return (
    <div>
      <div className="main">
        {detdata &&
          detdata.map((post, index) => (
            <Info
              key={post._id}
              id={post._id}
              img={post.mainImage.asset.url}
              img2={post.sideImage.asset.url}
              title={post.title}
              author={post.author._id}
            />
          ))}
      </div>
      {b ? (
        <div className="similar">
          {b.map((autho, index) => (
            <Card
              key={autho._id}
              id={autho._id}
              img={autho.mainImage.asset.url}
              title={autho.title}
            />
          ))}
        </div>
      ) : (
        <div>gdfdgssssd</div>
      )}
    </div>
  );
}

export default Detail;
