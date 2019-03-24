import React from 'react';
import ModalCollections from './ModalCollections';

import './InfoMovie.css';

const POSTER_URL = 'https://image.tmdb.org/t/p/w300';

const InfoMovie = props =>
    <div className="row mx-0 pb-3 px-0 wrapper-info">
        <div className="col-12 col-sm-4 px-0">
            <figure className="m-0">
                <img className="img-fluid w-100" src={`${POSTER_URL}${props.details.poster_path}`} alt={props.details.title} />
            </figure>
        </div>
        <div className="col-12 col-sm-8 px-0">
            <div className="mh-100">
                <div className="mh-100 mt-1 p-3 text-center text-white bg-dark h4  align-items-center justify-content-center drv-title shadow">
                    <span className="d-block w-100">{props.details.title}</span>
                    <small className="d-block w-100 tagline-text">{props.details.tagline}</small>
                </div>
                <div className="text-right mr-2">
                    {
                        props.details.genres.map(genre=>
                            <span className="badge badge-secondary mr-1" key={genre.id}>{genre.name}</span>
                        )
                    }
                </div>
                <div className="m-0 p-3 text-justify">
                    <h4>Summary</h4>
                    <p>{props.children}</p>
                </div>
                <div className="row px-3">
                    <div className="col pr-3 text-right">
                        <span className="badge badge-pill badge-warning ">
                            Score <span className="badge badge-light">{props.details.vote_average}</span>
                        </span>            
                    </div>
                </div>
                <div className="mt-3 p-3">
                    <h4>Details</h4>
                    <ul className="list-unstyled row px-3 mt-3">
                        <li className="list-item col-4 border-top py-2 font-weight-bold">Homepage</li>
                        <li className="list-item col-8 border-top py-2"><a href={props.details.homepage} target="_blank" rel="noopener noreferrer">{props.details.title}</a></li>
                        <li className="list-item col-4 border-top py-2 font-weight-bold">Release Date</li>
                        <li className="list-item col-8 border-top py-2">{props.details.release_date.toString()}</li>
                        <li className="list-item col-4 border-top py-2 font-weight-bold">Budget</li>
                        <li className="list-item col-8 border-top py-2">$ {props.details.budget}</li>
                        <li className="list-item col-4 border-top py-2 font-weight-bold">Popularity</li>
                        <li className="list-item col-8 border-top py-2">{props.details.popularity}</li>
                        <li className="list-item col-4 border-top py-2 font-weight-bold">Original Language</li>
                        <li className="list-item col-8 border-top py-2">{props.details.original_language}</li>
                 </ul>
                </div>
                <ModalCollections movieid={props.details.id} />
            </div>
        </div>
    </div>

export default InfoMovie;