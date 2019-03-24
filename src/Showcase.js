import React from 'react';

const Showcase = props =>
    <div className="row mx-1 mt-3">
        {
            props.items.map(item=>
                <div className="col-12 col-md-6 col-lg-3 mb-3" key={item.id}>
                    {props.render(item)}   
                </div>
            )
        }
    </div>
        
   
    

export default Showcase;