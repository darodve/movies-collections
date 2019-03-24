import React from 'react';

const BACKDROP_URL = 'https://image.tmdb.org/t/p/w1280';

const HeaderMovie = props =>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 px-0 mx-0">
                <figure className="m-0">
                    <img className="img-fluid w-100" src={`${BACKDROP_URL}${props.backdrop}`} alt={props.title} />
                </figure>
            </div>
        </div>
    </div>

export default HeaderMovie;