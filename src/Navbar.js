import React from 'react';

// import Search from './Search';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
            <a href="/" className="navbar-brand">Movies Collection</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Navigation Menu">
                <span className="navbar-toggler-icon"></span>   
            </button>

            <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <NavLink exact to='/' className="nav-link">Discover</NavLink>           
                    </li>
                    <li className="nav-item">
                    <NavLink to='/collections' className="nav-link">My Collections</NavLink> 
                    </li>
                </ul>
                <form action="" className="form-inline my-2 my-md-0">
                    <input type="text" className="form-control mr-sm-2" placeholder="Search movies..." aria-label="Search movies..." />
                    <button className="btn btn-primary my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

);

export default Navbar;
