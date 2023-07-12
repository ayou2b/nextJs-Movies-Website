"use client";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { fetchMoviesBySearch } from "@/GlobalRedux/FetchingData/fetchingBySearch";

import Container from "../../../../components/UI/Container";
import ItemsContainer from "../../../../components/UI/ItemsContainer";
import Movie from "../../../../components/UI/Movie";
import PagesHeader from "../../../../components/PagesHeader";
import LoadMoreData from "../../../../components/UI/LoadMoreData";

function Page() {
  const { MoviesBySearch, LoadMore } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchMoviesBySearch(params.movieName, LoadMore));
  }, [dispatch, params.movieName, LoadMore]);

  return (
    <Fragment>
      <PagesHeader title="Search Movies"></PagesHeader>
      <Container>
        <ItemsContainer>
          <div className="movies">
            {MoviesBySearch.length === 0 && (
              <h1>ther is no movies by the name of {params.movieName}</h1>
            )}

            {MoviesBySearch.map((movie) => (
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
    </Fragment>
  );
}

export default Page;
