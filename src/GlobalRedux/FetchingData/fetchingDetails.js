"use client";
import { actions } from "../Store";

export const movieDetails = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in movies details data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const movieDetails = await fetchData();
      dispatch(actions.getMovieDetails(movieDetails));
    } catch (error) {
      console.log("error in movies details data 2");
    }
  };
};

export const seriesDetails = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in series details data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const seriesDetails = await fetchData();
      dispatch(actions.getSeriesDetails(seriesDetails));
    } catch (error) {
      console.log("error in series details data 2");
    }
  };
};
