"use client";
import React, { useEffect } from "react";

import Link from "next/link";
import { actions } from "@/GlobalRedux/Store";
import { FetchMoviesGenreList } from "@/GlobalRedux/FetchingData/fetchingGenres";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
function MoviesGenre() {
  const { MoviesGenreList } = useSelector((state) => state.data);

  const pathname = usePathname();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMoviesGenreList());
  }, [dispatch]);

  const resetThepageHnadler = () => {
    dispatch(actions.resetThePage());
  };

  try {
    return (
      <div className="genre-container">
        <Link
          href={"/all-movies"}
          className={
            pathname === "/all-movies" ? "genre-link active" : "genre-link"
          }
          onClick={resetThepageHnadler}
        >
          All Movies
        </Link>
        {MoviesGenreList.map((genre) => (
          <Link
            href={`/movies-by-genre/${genre.id}`}
            key={genre.id}
            className={
              pathname === `/movies-by-genre/${genre.id}`
                ? "genre-link active"
                : "genre-link"
            }
            onClick={resetThepageHnadler}
          >
            {genre.name}
          </Link>
        ))}
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}

export default MoviesGenre;
