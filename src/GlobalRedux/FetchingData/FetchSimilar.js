"use client";
import { actions } from "../Store";

export const FetchSimilarMovies = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in similar movies  data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const similarMovies = await fetchData();
      dispatch(actions.getSimilarMovies(similarMovies.results));
    } catch (error) {
      console.log("error in similar movies  data 2");
    }
  };
};

export const FetchSimilarSeries = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in similar series data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const similarSeries = await fetchData();
      dispatch(actions.getSimilarSeries(similarSeries.results));
    } catch (error) {
      console.log("error in similar series data 2");
    }
  };
};
