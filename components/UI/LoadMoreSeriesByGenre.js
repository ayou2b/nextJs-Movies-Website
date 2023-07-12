"use client";
import React from "react";
import { actions } from "@/GlobalRedux/Store";
import { useDispatch, useSelector } from "react-redux";

function LoadMoreSeriesByGenre(props) {
  const { SeriesByGenre } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const loadMoreHnadLer = () => {
    dispatch(actions.loadMore(props.page));
    dispatch(actions.getMoreSeriesByGenre(SeriesByGenre));
  };

  return (
    <button className="load-more" onClick={loadMoreHnadLer}>
      Load more
    </button>
  );
}

export default LoadMoreSeriesByGenre;
