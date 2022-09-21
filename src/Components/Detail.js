import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Style/Detail.css';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
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
      <div className="detail__data">
        <h1 className="detail__title">{movie.title}</h1>
        <h2 className="detail__intro">{movie.description_intro}</h2>
        <div className="detail__info">
          <p className="detail__rating">
            ★{movie.rating} ♥{movie.like_count}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Detail;
