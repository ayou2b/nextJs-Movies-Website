"use client";
import React, { Fragment, useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchActorInformation } from "@/GlobalRedux/FetchingData/fetchActorInformation";
import { fetchMoviesByActor } from "@/GlobalRedux/FetchingData/fetchByActor";
import ActorHero from "../../../../components/ActorHero";
import MoviesSlider from "../../../../components/MoviesSlider";
import LodingSpinnerContainer from "../../../../components/LodingSpinnerContainer";
function Page() {
  const { actorInformation, byActor, isDataLoaded } = useSelector(
    (state) => state.data
  );
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActorInformation(params.starId));
  }, [dispatch, params.starId]);

  useEffect(() => {
    dispatch(fetchMoviesByActor(params.starId));
  }, [dispatch, params.starId]);

  return (
    <Fragment>
      {isDataLoaded === true && (
        <Fragment>
          <ActorHero
            name={actorInformation.name}
            birthday={actorInformation.birthday}
            profile={actorInformation.profile_path}
            biography={actorInformation.biography}
          ></ActorHero>
          <MoviesSlider
            data={byActor}
            path=""
            title={`By ${actorInformation.name}`}
          ></MoviesSlider>
        </Fragment>
      )}

      {isDataLoaded === false && (
        <LodingSpinnerContainer></LodingSpinnerContainer>
      )}
    </Fragment>
  );
}

export default Page;
