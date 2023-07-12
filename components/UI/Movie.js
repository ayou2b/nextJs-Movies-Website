"use client";
import React from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";

const onDragClickHandLer = () => {
  console.log("yes");
};

function Movie(props) {
  return (
    <div className="card" draggable={false}>
      <Link href={`/movie-information/${props.id}`} className="link">
        <div className="card-image">
          <LazyLoadImage
            src={`http://image.tmdb.org/t/p/original/${props.poster}`}
            alt={props.title}
            width="160px"
            height="230px"
            effect="blur"
            className="the-card-image"
          ></LazyLoadImage>
          <div className="card-image-overlay"></div>
        </div>
        <h3>{props.title}</h3>
      </Link>

      <div className="card-overlay"></div>
    </div>
  );
}

export default Movie;
