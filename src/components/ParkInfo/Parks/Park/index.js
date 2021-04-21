import React from 'react'
import Style from './styles.css'



const Park = (props) => {
    return(
        <li>{props.park.name}
        <span className="rating">   {props.park.rating}</span>
        </li>
    )
}

export default Park