import React from 'react'
import titleStyle from './css/title.module.css'

function Title(props) {
    let color = {color:props.color}
    return (
        <>
           <h1 style={color} className={titleStyle.bigText}>{props.children}</h1> 
        </>
    )
}

export default Title
