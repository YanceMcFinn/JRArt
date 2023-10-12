import React from "react";

const Navbar = () => {
    return(    
    <>
    <div className="top w-full h-12 px-5 py-3 text-main-color border-b border-b-main-color/50">
      <div className="float-left title text-2xl">
        <a className="hover:text-white" href="/">Jan Roppo Art</a>
      </div>
      <div className="float-right title text-xl">
        <ul>
          <li className="inline px-2">
            <a href="/about" className="hover:text-white">About</a>
          </li>
          <li className="inline px-2">
            <a href="/contact" className="hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </>

    )
}

export default Navbar