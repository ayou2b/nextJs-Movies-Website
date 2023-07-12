"use client";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "next/navigation";
import { fetchSeriesBySearch } from "@/GlobalRedux/FetchingData/fetchingBySearch";
import Container from "../../../../components/UI/Container";
import ItemsContainer from "../../../../components/UI/ItemsContainer";
import Serie from "../../../../components/UI/Serie";
import PagesHeader from "../../../../components/PagesHeader";
import LoadMoreData from "../../../../components/UI/LoadMoreData";

function Page() {
  const { SeriesBySearch, LoadMore } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  const params = useParams();

  useEffect(() => {
    dispatch(fetchSeriesBySearch(params.serieName, LoadMore));
  }, [dispatch, params.serieName, LoadMore]);

  return (
    <Fragment>
      <PagesHeader title="Search Series"></PagesHeader>
      <Container>
        <ItemsContainer>
          <div className="movies">
            {SeriesBySearch.length === 0 && (
              <h1>ther is no series by the name of {params.serieName}</h1>
            )}
            {SeriesBySearch.map((serie) => (
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
    </Fragment>
  );
}

export default Page;
