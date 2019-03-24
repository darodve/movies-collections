import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//import Routes from './Routes';
import MovieCollections from './MovieCollections';

export default () => 
    <BrowserRouter>
        <MovieCollections />
    </BrowserRouter>