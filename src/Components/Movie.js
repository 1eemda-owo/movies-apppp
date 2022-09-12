import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Style/Movie.css';

function Movie({ id, title, rating, poster }) {
  return (
    <section className="movie_box">
      <Link to={`/detail/${id}`} key={id}>
        <div className="movie">
          <img
            className="movie__poster"
            src={poster}
            alt={title}
            title={title}
          />
          <div className="movie__data">
            <p className="movie__rating">★{rating}</p>
            <p className="movie__title">{title}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
