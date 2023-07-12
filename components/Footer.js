import React from "react";
import Link from "next/link";

import BackgroundImage from "../public/movies.jpg";

function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="footer-container">
        <button className="logo">
          <span>f</span>Movies
        </button>
        <div className="footer-links">
          <ul>
            <li>
              <Link href="/all-movies" className="link">
                Movies
              </Link>
              <Link href="/trending-movies" className="link">
                Trending Movies
              </Link>
              <Link href="/top-rated-movies" className="link">
                Top-Rated Movies
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/all-series" className="link">
                Series
              </Link>
              <Link href="/trending-series" className="link">
                Trending Series
              </Link>
              <Link href="/top-rated-series" className="link">
                Top-Rated Series
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-overlay"></div>
    </footer>
  );
}

export default Footer;
