import React, { useState, useEffect } from "react";
import { movieDetails, movieCast, movieTrailer } from "../../api";
import Button from "../../Components/Button";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Modal from "../../Components/Modal";
import useModal from "../../hooks/useModal";
import dateFormat from '../../utils/dateFormater'
import "./index.scss";

const index = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [Trailer, setTrailer] = useState({});
  const [cast, setCast] = useState([]);
  const { isOpen, openModal, closeModal } = useModal();

  useEffect(() => {
    movieDetails(id).then((res) => setData(res.data));
    movieCast(id).then((res) => setCast(res.data.cast.slice(0, 5)));
  }, []);

  async function handleClickTrailer() {
    await movieTrailer(id).then((res) => setTrailer(res.data.results[0]));
    openModal();
  }

  return (
    <div className="movie-deatils">
      <div className="left">
        <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} />
      </div>
      <div className="right">
        <div className="details_movie">{data.original_title}</div>
        <div className="details_movie">{data.overview}</div>
        <div className="details_movie">{dateFormat(data.release_date)}</div>
        <div className="details_movie">{data.vote_average}</div>
        <div className="cast-details">
          {cast.map((item, index) => {
            return (
              <img
                key={item.id}
                className="cast-img"
                src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              />
            );
          })}
        </div>
        <Button onClick={handleClickTrailer} title={"Watch Trailer"}></Button>

        <Modal isOpen={isOpen} onClose={closeModal} title="Movie Details">
          <h3>{data.original_title}</h3>
          <YouTube videoId={Trailer.key} />
          <button onClick={closeModal}>Close</button>
        </Modal>
      </div>
    </div>
  );
};

export default index;
