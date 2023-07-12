"use client";
import { actions } from "../Store";

export const FetchMoviesGenreList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in  movies genre list data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const movieGenreList = await fetchData();
      dispatch(actions.getMoviesGenreList(movieGenreList.genres));
    } catch (error) {
      console.log("error in movies genre list   data 2");
    }
  };
};

export const FetchSeriesGenreList = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in  series genere list data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const seriesGenreList = await fetchData();
      dispatch(actions.getSeriesGenreList(seriesGenreList.genres));
    } catch (error) {
      console.log("error in  series genere list data 2");
    }
  };
};
