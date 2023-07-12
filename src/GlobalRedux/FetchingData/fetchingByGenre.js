"use client";
import { actions } from "../Store";

export const FetchMoviesByGenre = (genre, page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=fbea1f3a4675787277e22ae55fb34d84&with_genres=${genre}&page=${page}`
      );

      if (!response.ok) {
        console.log("error in  movies by genre  data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const moviesBygenre = await fetchData();
      dispatch(actions.getMoviesByGenre(moviesBygenre.results));
    } catch (error) {
      console.log("error in  movies by genre  data 2");
    }
  };
};

export const FetchSeriesByGenre = (genre, page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=fbea1f3a4675787277e22ae55fb34d84&with_genres=${genre}&page=${page}`
      );

      if (!response.ok) {
        console.log("error in  series by genre data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const seriesByGenre = await fetchData();
      dispatch(actions.getSeriesByGenre(seriesByGenre.results));
    } catch (error) {
      console.log("error in  series by genre data 2");
    }
  };
};
