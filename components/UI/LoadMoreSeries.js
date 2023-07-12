"use client";
import React from "react";
import { actions } from "@/GlobalRedux/Store";
import { useDispatch, useSelector } from "react-redux";

function LoadMoreSeries() {
  const { Series } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const loadMoreHnadLer = () => {
    dispatch(actions.loadMore());
    dispatch(actions.getMoreSeries(Series));
  };

  return (
    <button className="load-more" onClick={loadMoreHnadLer}>
      Load more
    </button>
  );
}

export default LoadMoreSeries;
