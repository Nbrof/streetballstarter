import React from 'react'
import Park from './Park'
import Style from './styles.css'

const Parks = (props) => {
   
    const parkinfo = props.parkArray.map((data, index) => {
        console.log("App-Parkdata2", data)
        return (
         <Park
         park={data}
         key={index}

         />
        
        )
        }
    )
    return(
        <ul>{parkinfo}</ul>
    )
}

export default Parks