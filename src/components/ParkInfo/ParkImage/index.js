import React from 'react'
import Style from './styles.css'

const ParkImage = (props) => {
    return(
        <img src={props.park.url} alt="..."/>
    )
}

export default ParkImage