import React from "react";

import backgroundImag from "../public/movies.jpg";

function PagesHeader(props) {
  return (
    <div
      className="pages-header"
      style={{
        backgroundImage: `url(${backgroundImag.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="pages-header-overlay"></div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default PagesHeader;
