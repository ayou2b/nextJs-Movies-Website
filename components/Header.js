"use client";
import React, { useEffect, useState } from "react";
import { UilBars } from "@iconscout/react-unicons";
import { actions } from "@/GlobalRedux/Store";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";
import { UilBrightness, UilMoon } from "@iconscout/react-unicons";
import { useTheme } from "next-themes";

import Link from "next/link";

function Header() {
  const { HeaderBars, light, dark } = useSelector((state) => state.data);

  const { theme, setTheme } = useTheme();

  const [colorChange, setColorchange] = useState(false);

  const dispatch = useDispatch();

  const pathname = usePathname();

  const params = useParams();

  const changeNavbarColor = () => {
    if (window.scrollY >= 30) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const brasClickHnadler = () => {
    dispatch(actions.openMenu());
  };

  try {
    return (
      <header className={colorChange ? "active" : ""}>
        <button>
          <span>f</span>Movies
        </button>
        <ul
          className={
            pathname === `/star-information/${params.starId}`
              ? "header-list active"
              : "header-list"
          }
        >
          <li>
            <Link href="/" className="link">
              Home
            </Link>
            <div
              className={
                pathname == "/"
                  ? "header-underline-effect active"
                  : "header-underline-effect"
              }
            ></div>
          </li>
          <li>
            <Link
              href="/all-movies"
              className="link"
              onClick={() => {
                dispatch(actions.resetThePage());
              }}
            >
              Movies
            </Link>
            <div
              className={
                pathname == "/all-movies"
                  ? "header-underline-effect active"
                  : "header-underline-effect"
              }
            ></div>
          </li>
          <li>
            <Link
              href="/all-series"
              className="link"
              onClick={() => {
                dispatch(actions.resetThePage());
              }}
            >
              Series
            </Link>
            <div
              className={
                pathname == "/all-series"
                  ? "header-underline-effect active"
                  : "header-underline-effect"
              }
            ></div>
          </li>

          <li>
            {dark === true && (
              <UilBrightness
                className="night-mode"
                onClick={() => {
                  setTheme("light");
                  dispatch(actions.setLight());
                  dispatch(actions.removeDark());
                }}
              ></UilBrightness>
            )}

            {light === true && (
              <UilMoon
                className="night-mode"
                onClick={() => {
                  setTheme("dark");
                  dispatch(actions.setDark());
                  dispatch(actions.removeLight());
                }}
              ></UilMoon>
            )}
          </li>
        </ul>
        <div
          className={HeaderBars === false ? "bars active" : "bars"}
          onClick={brasClickHnadler}
        >
          <UilBars></UilBars>
        </div>
      </header>
    );
  } catch (e) {
    console.log(e);
  }
}

export default Header;
