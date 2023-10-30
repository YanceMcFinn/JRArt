'use client'

import React from "react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
    return(    
    <>
    <div className="top-0 w-full z-10 h-14 bg-black px-5 py-2 text-main-color border-b border-b-main-color/50 fixed">
      <div className="float-left title text-3xl">
        <a className="hover:text-white" href="/">Jan Roppo Art</a>
      </div>
      <div className="mt-1 float-right title">
        <ul>

          <li className="dropdown inline sm:hidden inline-block relative">
            <button className="text-2xl">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <ul class="dropdown-menu absolute right-0 hidden text-main-color bg-black w-40 pt-1 rounded border border-main-color">
              <li className="w-full p-3"><a href="/" className="hover:text-white text-2xl">Works</a></li>
              <li className="w-full p-3"><a href="/about" className="hover:text-white text-2xl">About</a></li>
              <li className="w-full p-3"><a href="/about" className="hover:text-white text-2xl">Contact</a></li>
            </ul>
            
          </li>
       
          
          <div className='hidden sm:inline'>
          <li className="inline px-2 text-2xl">
            <a href="/" className="hover:text-white">Works</a>
          </li>
          <li className="inline px-2 text-2xl">
            <a href="/about" className="hover:text-white">About</a>
          </li>
          <li className="inline px-2 text-2xl">
            <a href="/contact" className="hover:text-white">Contact</a>
          </li>
          </div>
        </ul>
      </div>
    </div>
    </>

    )
}

export default Navbar