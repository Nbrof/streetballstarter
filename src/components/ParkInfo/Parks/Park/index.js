import React from 'react'

const Park = (props) => {
    return(
        <li>{props.park.name}
        <span className="rating">{props.park.rating}</span>
        </li>
    )
}

export default Park