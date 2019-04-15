import React, { Component } from 'react';
import './ImageList.css';

export default class ImageList extends Component {
    render() {
        const { images, text, numbers } = this.props; 
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
            <div className="row mb-5 mt-2">
                { imageListContent }
            </div>
        </React.Fragment>
        )
    }
}
