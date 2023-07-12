"use client";
import { actions } from "../Store";

export const fetchMoviesByActor = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `http://api.themoviedb.org/3/discover/movie?with_cast=${id}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in movies by actor 1");
      }

      const data = await response.json();
      return data;
    };

    try {
      const moviesByActor = await fetchData();
      dispatch(actions.getMoviesByActor(moviesByActor.results));
    } catch (error) {
      console.log("error in  movies by actor 2");
    }
  };
};
