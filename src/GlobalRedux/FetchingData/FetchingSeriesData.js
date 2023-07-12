"use client";
import { actions } from "../Store";

export const fetchSeries = (page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in series fetching data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const SeriesData = await fetchData();
      dispatch(actions.getSeries(SeriesData.results));
    } catch (error) {
      console.log("error in series fetching data 2");
    }
  };
};

export const fetchTrendingSeries = (page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in trending series fetching data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const TrendingMoviesData = await fetchData();
      dispatch(actions.getTrendingSeries(TrendingMoviesData.results));
    } catch (error) {
      console.log("error in trending series fetching data 2");
    }
  };
};

export const fetchTopRatedSeries = (page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/top_rated?page=${page}&api_key=fbea1f3a4675787277e22ae55fb34d84`
      );

      if (!response.ok) {
        console.log("error in top rated series fetching data 1");
      }
      dispatch(actions.setDataIsLoaded());
      const data = await response.json();
      return data;
    };

    try {
      const TopRatedSeries = await fetchData();
      dispatch(actions.getTopRatedSeries(TopRatedSeries.results));
    } catch (error) {
      console.log("error in top rated series fetching data 2");
    }
  };
};
