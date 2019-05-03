import React, { Component } from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const { images, text, numbers } = props; 
    let imageListContent; 

    if(images) {
        imageListContent = (
            images.map(image => (
                <div className="item" key={ image.id }>
                    <img src={ image.largeImageURL } alt={ image.tags } />
                    <div className="overlay"></div>
                    <div className="item-info">
                        <a href={ image.pageURL } target="_blank">Download</a>
                    </div>
                </div>
            ))
        )
    }

    return (
    <React.Fragment>
        <h4>Showing { numbers } image results for { text }</h4>            
        <div className="row mb-5 mt-5">
            { imageListContent }
        </div>
    </React.Fragment>
    )
  
}

export default ImageList;