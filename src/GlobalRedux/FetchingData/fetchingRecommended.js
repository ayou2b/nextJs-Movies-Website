"use client";
import { actions } from "../Store";

export const FetchRecommendedMovies = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in recommended movies  data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const recommendedMovies = await fetchData();
      dispatch(actions.getRecommendedMovies(recommendedMovies.results));
    } catch (error) {
      console.log("error in recommended movies  data 2");
    }
  };
};

export const fetchRecommendedSeries = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in recommended series data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const recommendedSeries = await fetchData();
      dispatch(actions.getRecommendedSeries(recommendedSeries.results));
    } catch (error) {
      console.log("error in recommended series data 2");
    }
  };
};
