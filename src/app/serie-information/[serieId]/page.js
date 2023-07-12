"use client";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { seriesDetails } from "@/GlobalRedux/FetchingData/fetchingDetails";
import { serieCharacters } from "@/GlobalRedux/FetchingData/fetchingCharacters";
import { FetchSimilarSeries } from "@/GlobalRedux/FetchingData/FetchSimilar";
import { fetchRecommendedSeries } from "@/GlobalRedux/FetchingData/fetchingRecommended";
import { FetchSerieTrailer } from "@/GlobalRedux/FetchingData/fetchingTrailers";
import { useParams } from "next/navigation";
import SeriesDetailsHero from "../../../../components/SerieDetailsHero";
import SeriesSlider from "../../../../components/SeriesSlider";
import LodingSpinnerContainer from "../../../../components/LodingSpinnerContainer";

function Page() {
  const params = useParams();
  const {
    SeriesDetails,
    SerieCharacters,
    SimilarSeries,
    RecommendedSeries,
    SerieTrailer,
    isDataLoaded,
  } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(seriesDetails(params.serieId));
  }, [dispatch, params.serieId]);

  useEffect(() => {
    dispatch(serieCharacters(params.serieId));
  }, [dispatch, params.serieId]);

  useEffect(() => {
    dispatch(FetchSimilarSeries(params.serieId));
  }, [dispatch, params.serieId]);

  useEffect(() => {
    dispatch(fetchRecommendedSeries(params.serieId));
  }, [dispatch, params.serieId]);

  useEffect(() => {
    dispatch(FetchSerieTrailer(params.serieId));
  }, [dispatch, params.serieId]);

  const trailerFilter = SerieTrailer.filter(
    (trailer) => trailer.type === "Trailer"
  );

  try {
    return (
      <Fragment>
        {isDataLoaded === true && (
          <div className="page-information-container">
            <SeriesDetailsHero
              backgroung={SeriesDetails.backdrop_path}
              poster={SeriesDetails.poster_path}
              name={SeriesDetails.name}
              overview={SeriesDetails.overview}
              genres={SeriesDetails.genres}
              casts={SerieCharacters}
            ></SeriesDetailsHero>

            <div className="trailer">
              {trailerFilter.length !== 0 && (
                <iframe
                  width="740"
                  height="440"
                  src={`https://www.youtube.com/embed/${
                    trailerFilter[trailerFilter.length - 1].key
                  }`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            <SeriesSlider
              data={SimilarSeries}
              title="Similar Series"
              path=""
            ></SeriesSlider>

            <SeriesSlider
              data={RecommendedSeries}
              title="Recommended Series"
              path=""
            ></SeriesSlider>
          </div>
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
