"use client";
import React from "react";
import { actions } from "@/GlobalRedux/Store";
import { useDispatch, useSelector } from "react-redux";
function LoadMoreMoviesByGnre(props) {
  const { MoviesByGenre } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const loadMoreHnadLer = () => {
    dispatch(actions.loadMore(props.page));
    dispatch(actions.getMoreMoviesByGenres(MoviesByGenre));
  };

  return (
    <button className="load-more" onClick={loadMoreHnadLer}>
      Load more
    </button>
  );
}

export default LoadMoreMoviesByGnre;
