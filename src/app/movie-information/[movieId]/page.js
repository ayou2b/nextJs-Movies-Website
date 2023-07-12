"use client";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieDetails } from "@/GlobalRedux/FetchingData/fetchingDetails";
import { movieCharacters } from "@/GlobalRedux/FetchingData/fetchingCharacters";
import { FetchSimilarMovies } from "@/GlobalRedux/FetchingData/FetchSimilar";
import { FetchRecommendedMovies } from "@/GlobalRedux/FetchingData/fetchingRecommended";
import { FetchMovieTrailer } from "@/GlobalRedux/FetchingData/fetchingTrailers";
import { useParams } from "next/navigation";
import MovieDetailHero from "../../../../components/MovieDetailHero";
import MoviesSlider from "../../../../components/MoviesSlider";
import LodingSpinnerContainer from "../../../../components/LodingSpinnerContainer";

function Page() {
  const params = useParams();
  const {
    MovieDetails,
    MovieCharacters,
    SimilarMovies,
    RecommendedMovies,
    MovieTrailer,
    isDataLoaded,
  } = useSelector((state) => state.data);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieDetails(params.movieId));
  }, [dispatch, params.movieId]);

  useEffect(() => {
    dispatch(movieCharacters(params.movieId));
  }, [dispatch, params.movieId]);

  useEffect(() => {
    dispatch(FetchSimilarMovies(params.movieId));
  }, [dispatch, params.movieId]);

  useEffect(() => {
    dispatch(FetchRecommendedMovies(params.movieId));
  }, [dispatch, params.movieId]);

  useEffect(() => {
    dispatch(FetchMovieTrailer(params.movieId));
  }, [dispatch, params.movieId]);

  const trailerFilter = MovieTrailer.filter(
    (trailer) => trailer.type === "Trailer"
  );

  try {
    return (
      <Fragment>
        {isDataLoaded === true && (
          <div className="page-information-container">
            <MovieDetailHero
              backgroung={MovieDetails.backdrop_path}
              poster={MovieDetails.poster_path}
              title={MovieDetails.title}
              overview={MovieDetails.overview}
              genres={MovieDetails.genres}
              casts={MovieCharacters}
            ></MovieDetailHero>

            <div className="trailer">
              {trailerFilter.length !== 0 && (
                <iframe
                  width="740"
                  height="440"
                  src={`https://www.youtube.com/embed/${
                    trailerFilter[trailerFilter.length - 1].key
                  }`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <MoviesSlider
              data={SimilarMovies}
              path=""
              title="Similar Movies"
            ></MoviesSlider>

            <MoviesSlider
              data={RecommendedMovies}
              path=""
              title="Recommended Movies"
            ></MoviesSlider>
          </div>
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
