import Movie from './Movie'
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../Style/Loading.css';

class LandingPage extends React.Component {

  state = {
    apiurl: `https://yts.mx/api/v2/list_movies.json?limit=15&sort_by=`,
    isLoading: true,
    movies: [],
    sortkey: '',
  }

  getMovies = async () => {   
    const {storeSort} = this.props;

    //console.log(this.state.sortkey);
    //console.log(this.state);
    console.log(storeSort);


    const {
      data: {
        data: { movies },
      },
    } = await axios.get(this.state.apiurl + storeSort);
    this.setState({ movies, isLoading: false });
  };
  
  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps) {
    if(this.props.storeSort !== prevProps.storeSort ) {
      this.getMovies();
    }
  }

  render() {
    const {storeGrid} = this.props;
    console.log(storeGrid);
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader_main">
            <div className="loader loader_ani"></div>
            <span className="loader loader_text">Loading...</span>
          </div>
        ) : (
          <div className={classNames("movies", storeGrid)} >
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.rating}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
    );
  }

}

const mapStateToProps = (state) => ({
  storeSort: state.sort.key,
  storeGrid: state.grid.g_key
});


export default connect(mapStateToProps)(LandingPage);
