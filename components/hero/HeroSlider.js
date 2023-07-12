"use client";
import React, { useEffect } from "react";
import { actions } from "@/GlobalRedux/Store";
import { fetchMovies } from "@/GlobalRedux/FetchingData/fetchingMoviesData";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FetchMovieTrailer } from "@/GlobalRedux/FetchingData/fetchingTrailers";
// import Slider from "react-animated-slider";
// import "react-animated-slider/build/horizontal.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function HeroSlider() {
  const { Movies } = useSelector((state) => state.data);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, [dispatch]);

  return (
    <Carousel
      responsive={responsive}
      className="slider-wrapper"
      arrows={false}
      infinite={true}
      autoPlay={true}
      showDots={false}
      autoPlaySpeed={4000}
    >
      {Movies.map((movie, idx) => (
        <div
          key={idx}
          className="slider-content"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
          }}
        >
          <div className="hero-content-container">
            <section>
              <LazyLoadImage
                className="hero-small-image"
                src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </section>
            <div className="inner">
              <div className="content">
                <h1>{movie.title}</h1>
                <p>{movie.overview.slice(0, 160)}...</p>
              </div>
              <div className="btns">
                <button
                  className="btn watch-now"
                  onClick={() => {
                    dispatch(FetchMovieTrailer(movie.id));
                    dispatch(actions.openTraiLerPopUp());
                    dispatch(actions.setShowOverlay());
                  }}
                >
                  Watch Trailer
                </button>
                <button
                  className="btn watch-trailer"
                  onClick={() => {
                    router.push(`/movie-information/${movie.id}`);
                  }}
                >
                  Information
                </button>
              </div>
            </div>
          </div>
          <div className="hero-container-overlay"></div>
        </div>
      ))}
    </Carousel>
  );
}

export default HeroSlider;
