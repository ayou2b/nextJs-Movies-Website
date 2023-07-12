"use client";

import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopRatedMovies } from "@/GlobalRedux/FetchingData/fetchingMoviesData";
import Container from "../../../components/UI/Container";
import ItemsContainer from "../../../components/UI/ItemsContainer";
import PagesHeader from "../../../components/PagesHeader";
import Movie from "../../../components/UI/Movie";
import LoadMoreData from "../../../components/UI/LoadMoreData";
import LodingSpinnerContainer from "../../../components/LodingSpinnerContainer";

function Page() {
  const { TopRatedMovies, LoadMore, isDataLoaded } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedMovies(LoadMore));
  }, [dispatch, LoadMore]);

  return (
    <Fragment>
      {isDataLoaded === true && (
        <Container>
          <PagesHeader title="Top Rated Movies"></PagesHeader>
          <ItemsContainer>
            <div className="movies">
              {TopRatedMovies.map((movie) => (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  poster={movie.poster_path}
                  id={movie.id}
                ></Movie>
              ))}
            </div>
          </ItemsContainer>
          <LoadMoreData></LoadMoreData>
        </Container>
      )}

      {isDataLoaded === false && (
        <LodingSpinnerContainer></LodingSpinnerContainer>
      )}
    </Fragment>
  );
}

export default Page;
