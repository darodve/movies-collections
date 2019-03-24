import React from 'react';
import HeaderMovie from './HeaderMovie';
import InfoMovie from './InfoMovie';

const API_URL = 'https://api.themoviedb.org/3/movie/';
const API_KEY = 'f60ccf8e9fb679f8b12ab7765a4b90f0';

class DetailMovie extends React.Component {
    state = { movie: {}, loading: true, error: false };

    async componentDidMount(){
        this.setState({ loading: true });
        try {
            const response = await fetch(`${API_URL}${this.props.match.params.id}?api_key=${API_KEY}`);
            const movieDetails = await response.json();
            this.setState({
                    movie: { ...movieDetails }
                });
            
        } catch(error) {
            this.setState({error: true});
        } finally {
            this.setState({loading: false});
        }

    }
    render(){
        const { movie, loading, error } = this.state;
        
        if(error){
            return (
                <div className="container d-flex justify-content-center">
                    <div className="row mt-3">
                        <div className="col">
                            <div className="card shadow">
                                <div className="card-body text-center">
                                    Ups!, an error has occurred and we couldn't load your movie details
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
                                    Loading movie details...
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
                        <div className="detail-movie shadow mb-3">
                            <InfoMovie details={{...movie}}>
                                {movie.overview}
                            </InfoMovie>
                            <HeaderMovie backdrop={movie.backdrop_path} title={movie.title} />
                        
                        </div>
                    </div>
                </div>
        )
    }
}

export default DetailMovie;