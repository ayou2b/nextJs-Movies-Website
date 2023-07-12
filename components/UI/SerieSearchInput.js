"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { UilSearch } from "@iconscout/react-unicons";
import { actions } from "@/GlobalRedux/Store";
import { useDispatch } from "react-redux";

function SerieSearchInput() {
  const [serieName, setSerieName] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const getMovieNameHandLer = (e) => {
    setSerieName(e.target.value);
  };

  const submitHandLer = (e) => {
    e.preventDefault();
    dispatch(actions.clearTheSeriesBySearchArray());
    if (serieName !== "") {
      router.push(`/series-search/${serieName}`);
    } else {
      return;
    }
  };

  return (
    <form onSubmit={submitHandLer} className={isFocus ? "form active" : "form"}>
      <input
        type="text"
        onChange={getMovieNameHandLer}
        onFocus={() => {
          setIsFocus(true);
        }}
        onBlur={() => {
          setIsFocus(false);
        }}
        placeholder="Search Series"
      ></input>
      <button>
        <UilSearch color="red" size="22"></UilSearch>
      </button>
    </form>
  );
}

export default SerieSearchInput;
