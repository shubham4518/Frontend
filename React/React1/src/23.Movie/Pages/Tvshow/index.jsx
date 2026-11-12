import React from "react";
import {
  MovieCard,
  MovieDescription,
  MovieImage,
  MovieRating,
  MovieTitle,
} from "../../Layout/Card";
import "./index.scss";

const index = ({ data }) => {
  return (
    <div>
      <div className="tv-card-container">
        {data.map((item, index) => {
          return (
            <MovieCard key={item.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              />
              <MovieTitle title={item.original_name}></MovieTitle>
              <MovieDescription description={item.overview}></MovieDescription>
              <MovieRating rating={item.vote_average}></MovieRating>
            </MovieCard>
          );
        })}
      </div>
    </div>
  );
};

export default index;
