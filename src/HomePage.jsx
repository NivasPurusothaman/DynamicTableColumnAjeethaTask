import React, { useState } from 'react'
import Navbar from './Navbar'
import "./homepage.css"
import DynamicTable from './DynamicTable';
import PrimeReactCrud from './PrimeReactCrud';

function HomePage() {

    const [navState, setNavState] = useState(1)
    const [arrowNum, setArrowNum] = useState(1)

  return (
    <div className="homepage">
      <div className="header">
        <h1>Amphenol</h1>
      </div>
      <div className='navAndContent'>
        <div className="navbar" style={arrowNum===1 ? {width: "15vw"} : {width : "6.3vw"}}>
          <Navbar navState={navState} setNavState={setNavState} arrowNum={arrowNum} setArrowNum={setArrowNum} />
        </div>
        <div>
          {(() => {
            if (navState === 1) {
              return <PrimeReactCrud />;
            } else if (navState === 2) {
              return <DynamicTable />;
            } else if (navState === 3) {
              return <h2>Third</h2>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default HomePage