import React from 'react';
import './styles.css';
// COMPONENTS
import Title from '../Title';
import parkData from '../parrkData';
import Parks from '../ParkInfo/Parks/'
import Parkimage from "../ParkInfo/ParkImage"
console.log("App-Parkdata", parkData)
// IMPORT DATA




export default function App() {
  // const Parkinfo = parkData.map((data, index) => {
  //   console.log("App-Parkdata2", data)
  //   return (
  //     <Parks
  //     key={index}
  //     {...Parkinfo}
  //     />
      
  //   )
  // })
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <main>
        <Title />
        <section className="items-container">
          <section id="items">
           <Parks parkArray={parkData} />
          </section>
          <section id="image">
            <Parkimage park={parkData[0]}/>
          </section>
        </section>
      </main>
    </div>
  );
}
