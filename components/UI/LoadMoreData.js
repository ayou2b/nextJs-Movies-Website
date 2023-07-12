"use client";
import React from "react";
import { actions } from "@/GlobalRedux/Store";
import { useDispatch, useSelector } from "react-redux";
function LoadMoreData() {
  const {
    Movies,
    TrendingMovies,
    TopRatedMovies,
    TrendingSeries,
    TopRatedSeries,
  } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const loadMoreHnadLer = () => {
    dispatch(actions.loadMore());
    dispatch(actions.getMoreMovies(Movies));
    dispatch(actions.getMoreTrendingMovies(TrendingMovies));
    dispatch(actions.getMoreTopRatedMovies(TopRatedMovies));
    dispatch(actions.getMoreTrendingSeries(TrendingSeries));
    dispatch(actions.getMoreTopratedSeries(TopRatedSeries));
  };

  return (
    <button className="load-more" onClick={loadMoreHnadLer}>
      Load more
    </button>
  );
}

export default LoadMoreData;
