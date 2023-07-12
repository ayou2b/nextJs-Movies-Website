"use client";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    Movies: [],
    TrendingMovies: [],
    TopRatedMovies: [],
    Series: [],
    TrendingSeries: [],
    TopRatedSeries: [],
    LoadMore: 1,

    MovieDetails: [],
    MovieCharacters: [],
    SeriesDetails: [],
    SerieCharacters: [],
    SimilarMovies: [],
    SimilarSeries: [],
    RecommendedMovies: [],
    RecommendedSeries: [],
    MoviesGenreList: [],
    SeriesGenreList: [],
    MoviesByGenre: [],
    SeriesByGenre: [],
    MoviesBySearch: [],
    SeriesBySearch: [],
    actorInformation: [],
    byActor: [],
    MovieTrailer: [],
    SerieTrailer: [],
    TrailerPopUp: false,
    showOverLay: false,
    MoviesTrailerIdForPopUp: null,
    HeaderBars: false,
    isDataLoaded: false,
    light: false,
    dark: true,
  },

  reducers: {
    getMovies(state, action) {
      state.Movies = action.payload;
    },

    getMoreMovies(state, action) {
      state.Movies = [...state.Movies, ...action.payload];
    },

    getTrendingMovies(state, action) {
      state.TrendingMovies = action.payload;
    },

    getMoreTrendingMovies(state, action) {
      state.TrendingMovies = [...state.TrendingMovies, ...action.payload];
    },

    getTopRatedMovies(state, action) {
      state.TopRatedMovies = action.payload;
    },

    getMoreTopRatedMovies(state, action) {
      state.TopRatedMovies = [...state.TopRatedMovies, ...action.payload];
    },

    getSeries(state, action) {
      state.Series = action.payload;
    },

    getMoreSeries(state, action) {
      state.Series = [...state.Series, ...action.payload];
    },

    getTrendingSeries(state, action) {
      state.TrendingSeries = action.payload;
    },

    getMoreTrendingSeries(state, action) {
      state.TrendingSeries = [...state.TrendingSeries, ...action.payload];
    },

    getTopRatedSeries(state, action) {
      state.TopRatedSeries = action.payload;
    },

    getMoreTopratedSeries(state, action) {
      state.TopRatedSeries = [...state.TopRatedSeries, ...action.payload];
    },

    loadMore(state) {
      state.LoadMore++;
    },

    resetThePage(state) {
      state.LoadMore = 1;
    },

    getMovieDetails(state, action) {
      state.MovieDetails = action.payload;
    },

    getMovieCharacters(state, action) {
      state.MovieCharacters = action.payload;
    },

    getSeriesDetails(state, action) {
      state.SeriesDetails = action.payload;
    },

    getSeriesCharacters(state, action) {
      state.SerieCharacters = action.payload;
    },

    getSimilarMovies(state, action) {
      state.SimilarMovies = action.payload;
    },

    getSimilarSeries(state, action) {
      state.SimilarSeries = action.payload;
    },

    getRecommendedMovies(state, action) {
      state.RecommendedMovies = action.payload;
    },

    getRecommendedSeries(state, action) {
      state.RecommendedSeries = action.payload;
    },

    getMoviesGenreList(state, action) {
      state.MoviesGenreList = action.payload;
    },

    getSeriesGenreList(state, action) {
      state.SeriesGenreList = action.payload;
    },

    getMoviesByGenre(state, action) {
      state.MoviesByGenre = action.payload;
    },

    getSeriesByGenre(state, action) {
      state.SeriesByGenre = action.payload;
    },

    getMoreMoviesByGenres(state, action) {
      state.MoviesByGenre = [...state.MoviesByGenre, ...action.payload];
    },

    getMoreSeriesByGenre(state, action) {
      state.SeriesByGenre = [...state.SeriesByGenre, ...action.payload];
    },

    getMoviesBySearch(state, action) {
      state.MoviesBySearch = [...state.MoviesBySearch, ...action.payload];
    },

    clearThemoveBySearchArray(state) {
      state.MoviesBySearch = [];
    },

    clearTheSeriesBySearchArray(state) {
      state.SeriesBySearch = [];
    },

    getSeriesBySearch(state, action) {
      state.SeriesBySearch = [...state.SeriesBySearch, ...action.payload];
    },

    getActorInformation(state, action) {
      state.actorInformation = action.payload;
    },

    getMoviesByActor(state, action) {
      state.byActor = action.payload;
    },

    getMovieTrailer(state, action) {
      state.MovieTrailer = action.payload;
    },

    getSerieTrailer(state, action) {
      state.SerieTrailer = action.payload;
    },

    openTraiLerPopUp(state) {
      state.TrailerPopUp = true;
    },

    closeTrailerPopUp(state) {
      state.TrailerPopUp = false;
    },

    setMovieTrailerId(state, action) {
      state.MoviesTrailerIdForPopUp = action.payload;
    },

    setShowOverlay(state) {
      state.showOverLay = true;
    },

    removeOverLay(state) {
      state.showOverLay = false;
    },

    openMenu(state) {
      state.HeaderBars = true;
    },

    closeMenu(state) {
      state.HeaderBars = false;
    },

    setDataIsLoaded(state) {
      state.isDataLoaded = true;
    },

    setLight(state) {
      state.light = true;
    },

    removeLight(state) {
      state.light = false;
    },

    setDark(state) {
      state.dark = true;
    },

    removeDark(state) {
      state.dark = false;
    },
  },
});

export const actions = dataSlice.actions;

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});
