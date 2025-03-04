// import React from 'react';
// import './App.css';
// import First from "./Components/First"

// function App() {
//   return (
//     <div>
//     <First name={"Rahul"} city={"Delhi"}/>
//     <First name={"simran"} city={"London"}/>
//     <First name={"Raj"} city={"Hyderabad"}/>          
//     </div>
//   );
// }

// export default App;


// Cards

import React from "react";
import Card from "./Components/Card";
import gandhi from "./assets/mahatma.jpg";
import Azad from "./assets/azad.webp";
import Bhagat from "./assets/bhagat.jpg";
import './App.css';

function App() {
  return (

    <div className="card-container">
      <Card img={gandhi} name={"Mahatma Gandhi"} description={"Mohandas Karamchand Gandhi (2 October 1869 – 30 January 1948) was an Indian lawyer, anti-colonial nationalist, and political ethicist who employed "} read={"https://en.wikipedia.org/wiki/Mahatma_Gandhi"} />
      <Card img={Azad} name={"Chandrasekhar Azad"} description={"Chandra Shekhar Azad was an Indian revolutionary who reorganised the Hindustan Republican Association (HRA) under its new name of Hindustan Socialist ."} read={"https://en.wikipedia.org/wiki/Chandra_Shekhar_Azad"} />
      <Card img={Bhagat} name={"Bhagat Singh"} description={"Bhagat Singh was an Indian anti-colonial revolutionary, who participated in the mistaken murder of a junior British police officer in December 1928 in what was to be retaliation for the death of an Indian nationalist."} read={"https://en.wikipedia.org/wiki/Bhagat_Singh"} />
    </div>

  )
}
export default App;