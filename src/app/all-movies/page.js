"use client";
import React, { Fragment, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "@/GlobalRedux/FetchingData/fetchingMoviesData";
import Container from "../../../components/UI/Container";
import ItemsContainer from "../../../components/UI/ItemsContainer";
import PagesHeader from "../../../components/PagesHeader";
import { actions } from "@/GlobalRedux/Store";
import Movie from "../../../components/UI/Movie";
import LoadMoreData from "../../../components/UI/LoadMoreData";
import MoviesGenre from "../../../components/UI/MoviesGenre";
import MovieSearchInput from "../../../components/UI/MovieSearchInput";
import LodingSpinnerContainer from "../../../components/LodingSpinnerContainer";

function Page() {
  const { Movies, LoadMore, isDataLoaded } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(LoadMore));
  }, [dispatch, LoadMore]);

  return (
    <Fragment>
      {isDataLoaded === true && (
        <Fragment>
          <PagesHeader title="Movies"></PagesHeader>
          <Container>
            <MovieSearchInput></MovieSearchInput>
            <ItemsContainer>
              <div className="movies">
                {Movies.map((movie) => (
                  <Movie
                    key={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    id={movie.id}
                  ></Movie>
                ))}
              </div>
              <MoviesGenre></MoviesGenre>
            </ItemsContainer>
            <LoadMoreData></LoadMoreData>
          </Container>
        </Fragment>
      )}

      {isDataLoaded === false && (
        <LodingSpinnerContainer></LodingSpinnerContainer>
      )}
    </Fragment>
  );
}

export default Page;
