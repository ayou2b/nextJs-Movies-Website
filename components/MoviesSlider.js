"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import Movie from "./UI/Movie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6.4,
  },

  ipades_small_devices: {
    breakpoint: { max: 786, min: 599 },
    items: 4.5,
  },

  mini_small_devices: {
    breakpoint: { max: 598, min: 413 },
    items: 2.5,
  },

  mobile: {
    breakpoint: { max: 412, min: 0 },
    items: 1.9,
  },
};

function MoviesSlider(props) {
  return (
    <Fragment>
      {props.data.length !== 0 && (
        <div className="slider-container">
          <div className="slider-header">
            <div className="slider-header-title">
              <h1>{props.title}</h1>
              <div className="slider-header-underline"></div>
            </div>
            {props.path !== "" && (
              <Link href={props.path} className="link">
                View all
              </Link>
            )}
          </div>
          <Carousel
            responsive={responsive}
            arrows={false}
            swipeable={true}
            draggable={true}
            containerClass="carousel-container"
            itemClass="slider-item"
          >
            {props.data.map((movie) => (
              <Movie
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                key={movie.id}
              ></Movie>
            ))}
          </Carousel>
        </div>
      )}
    </Fragment>
  );
}

export default MoviesSlider;
