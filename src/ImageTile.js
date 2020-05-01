import React from 'react'
import imgStyle from './css/image.module.css'

function ImageTile(props) {
    const ref = require('./img/' + props.imageRef);
    return (
        <div>
            <img src={ref} className={imgStyle.image} alt={props.alt}></img>
        </div>
    )
}

export default ImageTile
