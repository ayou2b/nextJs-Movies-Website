"use client";
import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Serie(props) {
  return (
    <div className="card">
      <Link href={`/serie-information/${props.id}`} className="link">
        <div className="card-image">
          <LazyLoadImage
            src={`http://image.tmdb.org/t/p/original/${props.poster}`}
            alt={props.name}
            width="160px"
            height="230px"
            effect="blur"
            className="the-card-image"
          ></LazyLoadImage>
          <div className="card-image-overlay"></div>
        </div>
        <h3>{props.name}</h3>
      </Link>
    </div>
  );
}

export default Serie;
