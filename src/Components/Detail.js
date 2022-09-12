import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState('');
  const getDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getDetail();
  });

  return (
    <section className="details">
      <img
        className="detail__bg"
        src={movie.background_image}
        alt={movie.title}
        tilte={movie.title}
      />
      <img
        className="detail__poster"
        src={movie.medium_cover_image}
        alt={movie.title}
        tilte={movie.title}
      />
      <div className="detail__info">
        <h1 className="detail__title">{movie.title}</h1>
        <h3 className="detail__intro">{movie.description_intro}</h3>
        <h5 className="detail__rating">{movie.rating}</h5>
        <h5 className="detail__like">{movie.like_count}</h5>
      </div>
    </section>
  );
}
export default Detail;
