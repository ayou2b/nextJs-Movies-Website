"use client";
import { actions } from "../Store";

export const fetchMoviesBySearch = (name, page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        ` https://api.themoviedb.org/3/search/movie?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84&query=${name}`
      );

      if (!response.ok) {
        console.log("error in movies by search data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const moviesBySearch = await fetchData();
      dispatch(actions.getMoviesBySearch(moviesBySearch.results));
    } catch (error) {
      console.log("error in movies by search data 2");
    }
  };
};

export const fetchSeriesBySearch = (name, page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        ` https://api.themoviedb.org/3/search/tv?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84&query=${name}`
      );

      if (!response.ok) {
        console.log("error in series by search data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const seriesBySearch = await fetchData();
      dispatch(actions.getSeriesBySearch(seriesBySearch.results));
    } catch (error) {
      console.log("error in series by search data 2");
    }
  };
};
