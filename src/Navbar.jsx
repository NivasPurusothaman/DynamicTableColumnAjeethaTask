import React from 'react'
import "./navbar.css"

function Navbar({navState, setNavState}) {
  return (
    <div>
      <div className="navbarHeader">
        <h1>Menu</h1>
      </div>
      <div className='btnDiv'>
        <button className={navState===1 ? "focussedBtn" : null} onClick={()=>setNavState(1)}>First</button>
      </div>
      <div className='btnDiv'>
       <button className={navState===2 ? "focussedBtn" : null} onClick={()=>setNavState(2)}>Second</button>
      </div>
      <div className='btnDiv'>
        <button className={navState===3 ? "focussedBtn" : null} onClick={()=>setNavState(3)}>Third</button>
      </div>
    </div>
  );
}

export default Navbar