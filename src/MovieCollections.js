import React from 'react';
//import { Link } from 'react-router-dom';

import Routes from './Routes';
import Navbar from './Navbar';

export default props =>
    <React.Fragment>
        <Navbar />
        <Routes />
    </React.Fragment>