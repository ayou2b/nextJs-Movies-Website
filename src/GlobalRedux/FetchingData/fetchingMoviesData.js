"use client";
import { actions } from "../Store";

export const fetchMovies = (page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in movies fetching data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const MoviesData = await fetchData();

      dispatch(actions.getMovies(MoviesData.results));
    } catch (error) {
      console.log("error in movies fetching data 2");
    }
  };
};

export const fetchTrendingMovies = (page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in trending movies fetching data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const TrendingMoviesData = await fetchData();
      dispatch(actions.getTrendingMovies(TrendingMoviesData.results));
    } catch (error) {
      console.log("error in trending movies fetching data 2");
    }
  };
};

export const fetchTopRatedMovies = (page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in top rated movies fetching data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const TopRatedMovies = await fetchData();
      dispatch(actions.getTopRatedMovies(TopRatedMovies.results));
    } catch (error) {
      console.log("error in top rated movies fetching data 2");
    }
  };
};
