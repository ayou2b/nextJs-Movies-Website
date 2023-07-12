"use client";
import React, { Fragment, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { FetchSeriesByGenre } from "@/GlobalRedux/FetchingData/fetchingByGenre";
import { FetchSeriesGenreList } from "@/GlobalRedux/FetchingData/fetchingGenres";
import Container from "../../../../components/UI/Container";
import ItemsContainer from "../../../../components/UI/ItemsContainer";
import Serie from "../../../../components/UI/Serie";
import PagesHeader from "../../../../components/PagesHeader";
import SeriesGenre from "../../../../components/UI/SeriesGenre";
import LoadMoreSeriesByGenre from "../../../../components/UI/LoadMoreSeriesByGenre";
import SerieSearchInput from "../../../../components/UI/SerieSearchInput";
import LodingSpinnerContainer from "../../../../components/LodingSpinnerContainer";

function Page() {
  const { SeriesByGenre, LoadMore, SeriesGenreList, isDataLoaded } =
    useSelector((state) => state.data);

  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchSeriesByGenre(params.seriesGenreId, LoadMore));
  }, [dispatch, params.seriesGenreId, LoadMore]);

  useEffect(() => {
    dispatch(FetchSeriesGenreList(params.seriesGenreId, LoadMore));
  }, [dispatch, params.seriesGenreId, LoadMore]);

  let genreName = SeriesGenreList.filter(
    (genre) => genre.id === +params.seriesGenreId
  );

  try {
    return (
      <Fragment>
        {isDataLoaded === true && (
          <Fragment>
            <PagesHeader title={genreName[0].name}></PagesHeader>
            <Container>
              <SerieSearchInput></SerieSearchInput>
              <ItemsContainer>
                <div className="movies">
                  {SeriesByGenre.map((serie) => (
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
              <LoadMoreSeriesByGenre page={1}></LoadMoreSeriesByGenre>
            </Container>
          </Fragment>
        )}

        {isDataLoaded === false && (
          <LodingSpinnerContainer></LodingSpinnerContainer>
        )}
      </Fragment>
    );
  } catch (e) {
    console.log(e);
  }
}

export default Page;
