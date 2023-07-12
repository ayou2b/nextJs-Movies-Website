"use client";
import { actions } from "../Store";

export const FetchMovieTrailer = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in  movie trailer 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const movieTrailer = await fetchData();
      dispatch(actions.getMovieTrailer(movieTrailer.results));
    } catch (error) {
      console.log("error in movies trailer 2");
    }
  };
};

export const FetchSerieTrailer = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in serie trailer 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const serieTrailer = await fetchData();
      dispatch(actions.getSerieTrailer(serieTrailer.results));
    } catch (error) {
      console.log("error in serie trailer 2");
    }
  };
};
