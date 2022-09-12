import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import '../Style/Loading.css';

class LandingPage extends React.Component {
  state = {
    apiUrl: `https://yts.mx/api/v2/list_movies.json?limit=15&sort_by=rating`,
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(this.state.apiUrl);
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader_main">
            <div className="loader loader_ani"></div>
            <span className="loader loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.medium_cover_image}
                year={movie.year}
                //bg={movie.background_image}
                //intro={movie.description_full}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default LandingPage;
