import React from "react";

const Navbar = () => {
    return(    
    <>
    <div className="top w-full h-12 px-5 py-3  text-main-color">
      <div className="float-left title text-2xl">
        Jan Roppo Art
      </div>
      <div className="float-right title text-2xl">
        <ul>
          <li className="block">
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </div>
    </>

    )
}

export default Navbar