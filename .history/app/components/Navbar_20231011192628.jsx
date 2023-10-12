import React from "react";

const Navbar = () => {
    return(    
    <>
    <div className="top w-full h-12 px-5 py-3 text-main-color">
      <div className="float-left title text-2xl">
        Jan Roppo Art
      </div>
      <div className="float-right title text-xl">
        <ul>
          <li className="inline px-2">
            <a href="/about" className="hover:text-white">About</a>
          </li>
        </ul>
      </div>
    </div>
    </>

    )
}

export default Navbar