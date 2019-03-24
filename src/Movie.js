import React from 'react';
//import ModalCollections from './ModalCollections';

import './Movie.css';

const API_IMG_URL = 'https://image.tmdb.org/t/p/w500';

class Movie extends React.Component{
    render() {
        const {
            title,
            release_date,
            poster_path,
            vote_average,
        } = this.props.details;
        return (
            <div className="card shadow align-items-strech justify-content-between">
                <div className="card-header mh-100 text-center  text-white bg-dark h6 d-flex align-items-center justify-content-center drv-title">
                        <span>{title}</span>
                </div>
                <div className="card-body m-0 p-1">
                    <figure className="m-0">
                        <img className="img-fluid w-100 " src={`${API_IMG_URL}${poster_path}`} alt={title} />
                    </figure>
                </div>
                <div className="row p-3 mt-0">
                    <div className="col-6 pl-3 text-left">
                        <span className="badge badge-secondary">{release_date}</span>
                    </div>
                    <div className="col-6 pr-3 text-right">
                        <span className="badge badge-pill badge-warning ">
                            Score <span className="badge badge-light">{vote_average}</span>
                        </span>            
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Movie;
