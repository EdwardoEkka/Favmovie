import React, { Component } from 'react';
import './App.css';

const moviesData = [
  {
    title: 'GoodWill Hunting',
    posterUrl: 'goodwill.jpg',
    trailerId: 'ReIJ1lbL-Q8',
  },
  {
    title: 'American Psycho',
    posterUrl: 'psycho.jpg',
    trailerId: '5YnGhW4UEhc',
  },
  {
    title: 'The Social Network',
    posterUrl: 'network.jpg',
    trailerId: 'lB95KLmpLR4',
  },
  {
    title: 'Interstellar',
    posterUrl: 'interstellar.jpg',
    trailerId: 'zSWdZVtXT7E',
  },
  {
    title: 'Fight Club',
    posterUrl: 'fightclub.jpg',
    trailerId: 'BdJKm16Co6M',
  },
  {
    title: 'Wolf of the Walstreet',
    posterUrl: 'wolf.jpg',
    trailerId: 'iszwuX1AK6A',
  },
  {
    title: 'SuperBad',
    posterUrl: 'superbad.jpg',
    trailerId: '4eaZ_48ZYog',
  },
  {
    title: '21 Jump Street',
    posterUrl: 'jumpstreet.jpg',
    trailerId: 'RLoKtb4c4W0',
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMovie: null,
      isTrailerPlaying: false,
      selectedMovieIndex: null, // New state variable
    };
  }

  playTrailer = (trailerId, index) => {
    this.setState({
      selectedMovie: trailerId,
      isTrailerPlaying: true,
      selectedMovieIndex: index, // Update the selected index
    });
  };

  closeTrailer = () => {
    this.setState({
      selectedMovie: null,
      isTrailerPlaying: false,
      selectedMovieIndex: null, // Reset the selected index
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Favorite Movies</h1>
        <div className="movie-list">
          {moviesData.map((movie, index) => (
            <div className="movie-card" key={index}>
              <h2>{movie.title}</h2>
              {/* Conditionally show/hide the poster */}
              {this.state.selectedMovie === movie.trailerId &&
              this.state.isTrailerPlaying &&
              this.state.selectedMovieIndex === index ? null : (
                <img
                  src={movie.posterUrl}
                  alt={`${movie.title} Poster`}
                  className="movie-poster"
                />
              )}
              {this.state.isTrailerPlaying &&
              this.state.selectedMovieIndex === index ? (
                <button className='b' onClick={this.closeTrailer}>
                  Close Trailer
                </button>
              ) : (
                <button
                  className="b1"
                  onClick={() => this.playTrailer(movie.trailerId, index)}
                >
                  Watch Trailer
                </button>
              )}

              {this.state.selectedMovie === movie.trailerId && (
                <div className="trailer-container">
                  <iframe
                    className="frame"
                    title="Movie Trailer"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${movie.trailerId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                 
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
