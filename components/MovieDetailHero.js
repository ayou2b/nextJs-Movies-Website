"use client";
import Link from "next/link";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function MovieDetailHero(props) {
  const [expanded, setExpanded] = useState(false);

  const theOverView = () => {
    if (props.overview.length === 0) {
      return `ther is no overview`;
    }

    if (props.overview.length <= 160) {
      return `${props.overview}`;
    }

    if (props.overview.length > 160) {
      return `${
        expanded ? props.overview : props.overview.slice(0, 160).trim() + "..."
      }`;
    }
  };

  const showMore_lessBtn = () => {
    if (props.overview.length <= 160) {
      return;
    } else {
      return (
        <button
          className="show-more-less"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      );
    }
  };

  try {
    return (
      <div
        className="movie-details-hero"
        style={{
          backgroundImage: `url(http://image.tmdb.org/t/p/original/${props.backgroung})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="details-content-container">
          <div className="details-small-hero-image">
            <LazyLoadImage
              src={`http://image.tmdb.org/t/p/original/${props.poster}`}
              alt={props.title}
              width={230}
              height={340}
              effect="blur"
            ></LazyLoadImage>
          </div>
          <div className="details-content">
            <h2>{props.title}</h2>
            <div className="genres">
              {props.genres.map((genre) => (
                <Link
                  href={`/movies-by-genre/${genre.id}`}
                  key={genre.id}
                  className="genre"
                >
                  {genre.name}
                </Link>
              ))}
            </div>
            <p className="overview">
              {theOverView()}
              {showMore_lessBtn()}
            </p>
            <div className="casts-container">
              <h3>Top Casts</h3>
              <div className="casts">
                {props.casts.map((cast) => (
                  <Link
                    href={`/star-information/${cast.id}`}
                    key={cast.id}
                    className="link cast"
                    style={{
                      backgroundImage: `url(http://image.tmdb.org/t/p/original/${cast.profile_path})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="movie-details-hero-overlay"></div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}

export default MovieDetailHero;
