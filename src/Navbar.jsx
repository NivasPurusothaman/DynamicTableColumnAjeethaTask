import React from 'react'
import "./navbar.css"

function Navbar({navState, setNavState}) {
  return (
    <div>
      <div className="navbarHeader">
        <h1>Menu</h1>
      </div>
      <div className='btnDiv'>
        <div className={navState===1 ? "focussedBtn" : null}>
          <button onClick={()=>setNavState(1)}>First</button>
        </div>
      </div>
      <div className='btnDiv'>
        <div className={navState===2 ? "focussedBtn" : null}>
          <button onClick={()=>setNavState(2)}>Second</button>
        </div>
      </div>
      <div className='btnDiv'>
        <div className={navState===3 ? "focussedBtn" : null}>
          <button onClick={()=>setNavState(3)}>Third</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar