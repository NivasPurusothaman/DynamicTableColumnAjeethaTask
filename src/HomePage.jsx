import React, { useState } from 'react'
import Navbar from './Navbar'
import "./homepage.css"
import DynamicTable from './DynamicTable';
import PrimeReactCrud from './PrimeReactCrud';

function HomePage() {

    const [navState, setNavState] = useState(1)

  return (
    <div className="homepage">
      <div className="header">
        <h1>My First Project</h1>
      </div>
      <div className='navAndContent'>
        <div className="navbar">
          <Navbar navState={navState} setNavState={setNavState} />
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