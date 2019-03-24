import React from 'react';

// const COLLECTION_SAMPLE = {
//     collections: [
//         {
//             name: 'My Collection',
//             movies: []
//         }
//     ]
// }

class ModalCollections extends React.Component {
    state = {
        newCollection: '',
        error: false
    };

    static getDerivedStateFromProps(props, state){
        return {
            movieId: props.movieid
        }
    }

    render(){
        const {
            movieid
          } = this.props;

        const { newCollection } = this.state;
          
        return (
            <div className="collections mx-3">
                <button type="button" className="btn btn-info w-100"  data-toggle="modal" data-target="#fm-modal-grid" id={movieid}>Add to Collection</button>
                <div className="modal fade" id="fm-modal-grid" tabIndex="-1" role="dialog" aria-labelledby="fm-modal-grid" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="">ADD TO COLLECTIONS</h5>
                                <button className="close" data-dismiss="modal" aria-label="Cerrar">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col">
                                            {
                                                this.state.error &&
                                                    <div className="alert alert-danger mt-3">
                                                        <strong>Error</strong> The collection can't be empty.
                                                    </div>
                                            }
                                            <form onSubmit={this.addCollection} className="form-inline my-2">
                                                <input type="text" className="form-control mb-1" placeholder="New Collection..." aria-label="Add Collection..." name="newCollection" value={newCollection} onChange={this.update} />
                                                <button className="btn btn-primary ml-1 mb-1" type="submit" disabled={this.state.error}>Add</button>
                                            </form>
                                          
                                            <p>La pelicula es {movieid}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    update = event => 
        this.setState({
            [event.target.name]: event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value,
            error: false
        });

    addCollection = event => {
        event.preventDefault();
        const {newCollection, movieId} = this.state;

        console.log(movieId);
        
        if(newCollection.trim().length === 0) {
            return this.setState({error: true});
        }
        alert(JSON.stringify(this.state));
    }

}
    
export default ModalCollections;