"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import HeroSlider from "../../components/hero/HeroSlider";
import MoviesSlider from "../../components/MoviesSlider";
import TrailerPop from "../../components/TrailerPop";
import { actions } from "@/GlobalRedux/Store";
import LodingSpinnerContainer from "../../components/LodingSpinnerContainer";

import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
} from "@/GlobalRedux/FetchingData/fetchingMoviesData";
import {
  fetchTopRatedSeries,
  fetchTrendingSeries,
} from "@/GlobalRedux/FetchingData/FetchingSeriesData";
import SeriesSlider from "../../components/SeriesSlider";

export default function Home() {
  const {
    TrendingMovies,
    TopRatedMovies,
    TrendingSeries,
    TopRatedSeries,
    TrailerPopUp,
    showOverLay,
    isDataLoaded,
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedMovies(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingMovies(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTopRatedSeries(1));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingSeries(1));
  }, [dispatch]);

  try {
    return (
      <React.Fragment>
        {isDataLoaded === false && (
          <LodingSpinnerContainer></LodingSpinnerContainer>
        )}

        {isDataLoaded === true && (
          <div className="landing-page-container">
            <HeroSlider></HeroSlider>
            {TrailerPopUp && <TrailerPop></TrailerPop>}
            <div className="page-information-container">
              <MoviesSlider
                data={TrendingMovies}
                path="trending-movies"
                title="Trending Movies"
              ></MoviesSlider>
              <MoviesSlider
                data={TopRatedMovies}
                path="top-rated-movies"
                title="Top Rated Movies"
              ></MoviesSlider>
              <SeriesSlider
                data={TrendingSeries}
                path="trending-series"
                title="Trending Series"
              ></SeriesSlider>
              <SeriesSlider
                data={TopRatedSeries}
                path="top-rated-series"
                title="Top Rated Series"
              ></SeriesSlider>
            </div>
            <div
              className={
                showOverLay && TrailerPopUp
                  ? "landing-page-overlay active"
                  : "landing-page-overlay"
              }
              onClick={() => {
                dispatch(actions.closeTrailerPopUp());
              }}
            ></div>
          </div>
        )}
      </React.Fragment>
    );
  } catch (e) {
    console.log(e);
  }
}
