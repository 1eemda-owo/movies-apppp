import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, rating, poster, year }) {
  return (
    <Link to={`/detail/${id}`} key={id}>
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__rating">{rating}</h5>
          <h5 className="movie__year">{year}</h5>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
