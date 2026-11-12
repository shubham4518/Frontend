import React from "react";
import {
  MovieCard,
  MovieDescription,
  MovieImage,
  MovieRating,
  MovieTitle,
} from "../../Layout/Card";
import Pagination from "../../Components/Pagaination";
import "./index.scss";
import { Link } from "react-router-dom";

const index = ({ data, currentPage, handleNextPage, handlePrevPage }) => {
  return (
    <div>
      <div className="movie-card-container">
        {data.map((item, index) => {
          return (
            <MovieCard key={item.id}>
              <Link to={`movie/${item.id}`}>
                {" "}
                <MovieImage
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
              </Link>
              <MovieTitle title={item.original_title}></MovieTitle>
              <MovieDescription description={item.overview}></MovieDescription>
              <MovieRating rating={item.vote_average}></MovieRating>
            </MovieCard>
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </div>
  );
};

export default index;
