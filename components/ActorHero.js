"use client";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ActorHero(props) {
  const [expanded, setExpanded] = useState(false);

  const theOverView = () => {
    if (props.biography.length === 0) {
      return `ther is no biography`;
    }

    if (props.biography.length <= 160) {
      return `${props.biography}`;
    }

    if (props.biography.length > 160) {
      return `${
        expanded
          ? props.biography
          : props.biography.slice(0, 160).trim() + "..."
      }`;
    }
  };

  const showMore_lessBtn = () => {
    if (props.biography.length <= 160) {
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
      <div className="actor-hero-container">
        <div className="actor-hero">
          <div className="actor-image">
            <LazyLoadImage
              src={`http://image.tmdb.org/t/p/original/${props.profile}`}
              alt={props.name}
              width={300}
              height={430}
              effect="blur"
            ></LazyLoadImage>
          </div>
          <div className="actor-information">
            <h1>{props.name}</h1>
            <p>{props.birthday}</p>
            <h3>THE BIOGRAPHY</h3>
            <p className="biography">
              {theOverView()}
              {showMore_lessBtn()}
            </p>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}

export default ActorHero;
