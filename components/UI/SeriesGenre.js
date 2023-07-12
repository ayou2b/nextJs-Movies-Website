"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { actions } from "@/GlobalRedux/Store";
import { FetchSeriesGenreList } from "@/GlobalRedux/FetchingData/fetchingGenres";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

function SeriesGenre() {
  const { SeriesGenreList } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const pathname = usePathname();

  useEffect(() => {
    dispatch(FetchSeriesGenreList());
  }, [dispatch]);

  const resetThepageHnadler = () => {
    dispatch(actions.resetThePage());
  };

  try {
    return (
      <div className="genre-container">
        <Link
          href={"/all-series"}
          className={
            pathname === "/all-series" ? "genre-link active" : "genre-link"
          }
          onClick={resetThepageHnadler}
        >
          All Series
        </Link>

        {SeriesGenreList.map((genre) => (
          <Link
            href={`/series-by-genre/${genre.id}`}
            key={genre.id}
            className={
              pathname === `/series-by-genre/${genre.id}`
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

export default SeriesGenre;
