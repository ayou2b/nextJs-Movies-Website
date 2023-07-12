"use client";
import { actions } from "../Store";

export const movieCharacters = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in movies details data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const movieCharacters = await fetchData();
      dispatch(actions.getMovieCharacters(movieCharacters.cast.slice(0, 4)));
    } catch (error) {
      console.log("error in movies details data 2");
    }
  };
};

export const serieCharacters = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in series details data 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const serieCharacters = await fetchData();
      dispatch(actions.getSeriesCharacters(serieCharacters.cast.slice(0, 4)));
    } catch (error) {
      console.log("error in series details data 2");
    }
  };
};
