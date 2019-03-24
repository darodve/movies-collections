import React from 'react';

import './Error404.css';

const Error404 = props =>

        <div className="main">
            <div className="container d-flex justify-content-center  mt-3">
                <div className="row mt-3">
                    <div className="col">
                        <div className="card shadow">
                            <div className="card-body text-center">
                                        Error 404, Page Not Found
                                        <button className="btn btn-info ml-3" onClick={props.history.goBack}>Go Back!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
   
    

export default Error404;