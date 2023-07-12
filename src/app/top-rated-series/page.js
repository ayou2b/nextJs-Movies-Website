"use client";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopRatedSeries } from "@/GlobalRedux/FetchingData/FetchingSeriesData";
import PagesHeader from "../../../components/PagesHeader";
import Container from "../../../components/UI/Container";
import ItemsContainer from "../../../components/UI/ItemsContainer";
import Serie from "../../../components/UI/Serie";
import LoadMoreData from "../../../components/UI/LoadMoreData";
import LodingSpinnerContainer from "../../../components/LodingSpinnerContainer";

function Page() {
  const { TopRatedSeries, LoadMore, isDataLoaded } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopRatedSeries(LoadMore));
  }, [dispatch, LoadMore]);

  return (
    <Fragment>
      {isDataLoaded === true && (
        <Container>
          <PagesHeader title="Top Rated Series"></PagesHeader>
          <ItemsContainer>
            <div className="movies">
              {TopRatedSeries.map((serie) => (
                <Serie
                  key={serie.id}
                  name={serie.name}
                  poster={serie.poster_path}
                  id={serie.id}
                ></Serie>
              ))}
            </div>
          </ItemsContainer>
          <LoadMoreData></LoadMoreData>
        </Container>
      )}

      {isDataLoaded === false && (
        <LodingSpinnerContainer></LodingSpinnerContainer>
      )}
    </Fragment>
  );
}

export default Page;
