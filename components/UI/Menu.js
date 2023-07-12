"use client";
import React from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import MoviesGenre from "./MoviesGenre";
import SeriesGenre from "./SeriesGenre";
import { useDispatch } from "react-redux";
import { actions } from "@/GlobalRedux/Store";
import { usePathname, useParams } from "next/navigation";

import { useTheme } from "next-themes";

import {
  UilTimes,
  UilTvRetro,
  UilFilm,
  UilEstate,
  UilBrightness,
  UilMoon,
} from "@iconscout/react-unicons";

function Menu() {
  const { HeaderBars, dark, light } = useSelector((state) => state.data);

  const { theme, setTheme } = useTheme();

  const dispatch = useDispatch();

  const pathname = usePathname();

  const params = useParams();

  const closeMenuHandler = () => {
    dispatch(actions.closeMenu());
  };

  return (
    <div className={HeaderBars === true ? "menu active" : "menu"}>
      <UilTimes className="close" onClick={closeMenuHandler}></UilTimes>

      <h4>Menu</h4>
      <ul>
        <li>
          <Link href="/" className={pathname === "/" ? "link active" : "link"}>
            <UilEstate className="menu-icon"></UilEstate> Home
          </Link>
        </li>
        <li>
          <Link
            href="/all-movies"
            className={pathname === "/all-movies" ? "link active" : "link"}
          >
            <UilFilm className="menu-icon"></UilFilm> Movies
          </Link>
        </li>
        <li>
          <Link
            href="/all-series"
            className={pathname === "/all-series" ? "link active" : "link"}
          >
            <UilTvRetro className="menu-icon"></UilTvRetro> Series
          </Link>
        </li>
      </ul>

      <h4>Theme</h4>

      <ul>
        <li
          className="them-container"
          onClick={() => {
            setTheme("light");
            dispatch(actions.setLight());
            dispatch(actions.removeDark());
          }}
        >
          <UilBrightness className="theme-icon"></UilBrightness>
          <span>Light</span>
        </li>
        <li
          className="them-container"
          onClick={() => {
            setTheme("dark");
            dispatch(actions.setDark());
            dispatch(actions.removeLight());
          }}
        >
          <UilMoon className="theme-icon"></UilMoon>
          <span>Dark</span>
        </li>
      </ul>

      {(pathname === "/all-movies" ||
        pathname === `/movies-by-genre/${params.genreId}`) && (
        <div className="menu-genre-container">
          <h4>Genre</h4>
          <MoviesGenre></MoviesGenre>
        </div>
      )}

      {(pathname === "/all-series" ||
        pathname === `/series-by-genre/${params.seriesGenreId}`) && (
        <div className="menu-genre-container">
          <h4>Genre</h4>
          <SeriesGenre></SeriesGenre>
        </div>
      )}
    </div>
  );
}

export default Menu;
