import React from 'react';
import { Link } from 'react-router-dom';

// import logo from './logo.svg';
import './Movies.css';

import Showcase from './Showcase';
import Movie from './Movie';

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc';
const API_KEY = 'f60ccf8e9fb679f8b12ab7765a4b90f0';

class Movies extends React.Component {
    state = { movies: [], loading: false, error: false };
    async componentDidMount(){
        this.setState({ loading: true });
        try {
            const response = await fetch(`${API_URL}&api_key=${API_KEY}`);
            const { results } = await response.json();
            this.setState({movies: results});
        } catch(error) {
            this.setState({error: true});
        } finally {
            this.setState({loading: false});
        }
        
    }
    render() {
        const { movies, loading, error } = this.state;
        if(error){
            return (
                <div className="container d-flex justify-content-center">
                    <div className="row mt-3">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    Ups!, an error has occurred and we couldn't load your movies
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(loading){
            return (
                <div className="container d-flex justify-content-center">
                    <div className="row mt-3">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    Loading movies...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div className="main">
                    <div className="container">
                        <Showcase items={movies} render={movie =>
                            <Link to={`/movie/${movie.id}`}>
                                <Movie details={movie} />
                            </Link>
                            } />
                    </div>
                </div>

        );
  }
}

export default Movies;
