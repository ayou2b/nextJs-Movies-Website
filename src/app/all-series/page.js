"use client";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSeries } from "@/GlobalRedux/FetchingData/FetchingSeriesData";
import PagesHeader from "../../../components/PagesHeader";
import Container from "../../../components/UI/Container";
import ItemsContainer from "../../../components/UI/ItemsContainer";
import Serie from "../../../components/UI/Serie";
import LoadMoreSeries from "../../../components/UI/LoadMoreSeries";
import SeriesGenre from "../../../components/UI/SeriesGenre";
import SerieSearchInput from "../../../components/UI/SerieSearchInput";
import LodingSpinnerContainer from "../../../components/LodingSpinnerContainer";

function Page() {
  const { Series, LoadMore, isDataLoaded } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSeries(LoadMore));
  }, [dispatch, LoadMore]);

  return (
    <React.Fragment>
      {isDataLoaded === true && (
        <Fragment>
          <PagesHeader title="Series"></PagesHeader>
          <Container>
            <SerieSearchInput></SerieSearchInput>
            <ItemsContainer>
              <div className="movies">
                {Series.map((serie) => (
                  <Serie
                    key={serie.id}
                    name={serie.name}
                    poster={serie.poster_path}
                    id={serie.id}
                  ></Serie>
                ))}
              </div>
              <SeriesGenre></SeriesGenre>
            </ItemsContainer>
            <LoadMoreSeries></LoadMoreSeries>
          </Container>
        </Fragment>
      )}

      {isDataLoaded === false && (
        <LodingSpinnerContainer></LodingSpinnerContainer>
      )}
    </React.Fragment>
  );
}

export default Page;
