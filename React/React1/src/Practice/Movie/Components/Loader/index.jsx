import React from "react";
import "./index.scss";

const Loader = () => {
  return (
    <div className="movie-loader">
      <div className="loader-content">
        <div className="film-reel">
          <div className="reel-center"></div>
          <div className="reel-hole hole-1"></div>
          <div className="reel-hole hole-2"></div>
          <div className="reel-hole hole-3"></div>
          <div className="reel-hole hole-4"></div>
        </div>

        <h2>
          Cine<span>Verse</span>
        </h2>

        <p>Loading Movies...</p>

        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
