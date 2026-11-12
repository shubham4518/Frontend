import "./index.scss";

export function MovieCard({ children }) {
  return <div className="movie-card">{children}</div>;
}

export function MovieImage({ src }) {
  return <img src={src} alt="Movie Image" className="movie-image" />;
}

export function MovieTitle({ title }) {
  return <div className="movie-title">{title}</div>;
}

export function MovieDescription({ description }) {
  return <div className="movie-description">{description}</div>;
}

export function MovieRating({ rating }) {
  return <div className="movie-rating">{rating}</div>;
}
