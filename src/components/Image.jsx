import React from 'react'

const Image = ({ image }) => {

    //Extraer las variables
    const { largeImageURL, likes, previewURL, tags, views } = image

    return (

        <div className="col-12 col-sm-6 col-md-3 my-3">
            <div className="card shadow">
                <img src={previewURL} alt={tags} className="card-img-top" />

                <div className="card-body d-flex flex-column text-center">
                    <p className="card-text">{likes} Me gusta</p>
                    <p className="card-text">{views} Vistas</p>
                </div>
                <p className></p>
                <div className="card-footer">
                    <a href={largeImageURL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">Ver imagen</a>
                </div>
            </div>
        </div>
    );
}

export default Image;