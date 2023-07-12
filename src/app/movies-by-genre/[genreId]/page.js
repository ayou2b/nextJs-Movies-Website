"use client";
import React, { Fragment, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { FetchMoviesByGenre } from "@/GlobalRedux/FetchingData/fetchingByGenre";
import { FetchMoviesGenreList } from "@/GlobalRedux/FetchingData/fetchingGenres";
import Container from "../../../../components/UI/Container";
import ItemsContainer from "../../../../components/UI/ItemsContainer";
import Movie from "../../../../components/UI/Movie";
import PagesHeader from "../../../../components/PagesHeader";
import MoviesGenre from "../../../../components/UI/MoviesGenre";
import LoadMoreMoviesByGnre from "../../../../components/UI/LoadMoreMoviesByGnre";
import MovieSearchInput from "../../../../components/UI/MovieSearchInput";
import LodingSpinnerContainer from "../../../../components/LodingSpinnerContainer";

function Page() {
  const { MoviesByGenre, LoadMore, MoviesGenreList, isDataLoaded } =
    useSelector((state) => state.data);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchMoviesByGenre(params.genreId, LoadMore));
  }, [dispatch, params.genreId, LoadMore]);

  useEffect(() => {
    dispatch(FetchMoviesGenreList());
  }, [dispatch]);

  let genreName = MoviesGenreList.filter(
    (genre) => genre.id === +params.genreId
  );

  try {
    return (
      <Fragment>
        {isDataLoaded === true && (
          <Fragment>
            <PagesHeader title={genreName[0].name}></PagesHeader>
            <Container>
              <MovieSearchInput></MovieSearchInput>
              <ItemsContainer>
                <div className="movies">
                  {MoviesByGenre.map((movie) => (
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
              <LoadMoreMoviesByGnre page={1}></LoadMoreMoviesByGnre>
            </Container>
          </Fragment>
        )}

        {isDataLoaded === false && (
          <LodingSpinnerContainer></LodingSpinnerContainer>
        )}
      </Fragment>
    );
  } catch (e) {
    console.log(e);
  }
}

export default Page;
