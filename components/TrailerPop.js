"use client";
import React from "react";
import { useSelector } from "react-redux";

function TrailerPop() {
  const { MovieTrailer } = useSelector((state) => state.data);

  try {
    return (
      <div className="trailer-pop-up">
        <iframe
          width="740"
          height="440"
          src={`https://www.youtube.com/embed/${MovieTrailer[0].key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}

export default TrailerPop;
