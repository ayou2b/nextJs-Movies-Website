"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UilSearch } from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";
import { actions } from "@/GlobalRedux/Store";

function MovieSearchInput() {
  const [movieName, setMovieName] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const dispatch = useDispatch();

  const router = useRouter();

  const getMovieNameHandLer = (e) => {
    setMovieName(e.target.value);
  };

  const submitHandLer = (e) => {
    e.preventDefault();

    dispatch(actions.clearThemoveBySearchArray());

    if (movieName !== "") {
      router.push(`/movies-search/${movieName}`);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitHandLer} className={isFocus ? "form active" : "form"}>
      <input
        type="text"
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        placeholder="Search Movies"
        onChange={getMovieNameHandLer}
      ></input>

      <button>
        <UilSearch color="red" size="22"></UilSearch>
      </button>
    </form>
  );
}

export default MovieSearchInput;
