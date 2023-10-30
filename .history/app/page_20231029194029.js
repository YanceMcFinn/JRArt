'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from '../json/works.json'
// import { getLocalData } from '@/lib/localdata'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


export default function Home() {
  let imageSrcs = {}
  const paintings = works

  // async function getWorks(){
  //   art = await getLocalData()
  //   setPaintings2(art)
  //   console.log(paintings2)
  // }
  // useEffect(()=>{
  //   getWorks()
  // }, [])
paintings.map((art) =>{
  imageSrcs[art.title]=require(`../public/static/img/${art.title.toLowerCase().replaceAll(" ", "_").replaceAll("?","")}.jpg`)
})
  return (
    <main className="text-white mt-20">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 place-items-center mx-20">
        {paintings.map(art=>{
          return (
          <div className='relative max-w-xs '>

            <a href={`/works/${art.title.toLowerCase()}`}  className='mx-auto'>
              <img src={imageSrcs[art.title].default.src}
              className=" transition duration-300 ease-in-out w-auto h-auto"
              // width={500}
              // height={500}
              alt={art.title} />
            
            <div
        className="z-0 absolute flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-main-color bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50">
          {/* {art.title} */}
        </div>
        </a>

            {/* Code for "zoom" effect */}
            {/* <p>{art.title}</p>
            <a href={`/works/${art.title.toLowerCase()}`}  className='mx-auto'>
              <img src={imageSrcs[art.title].default.src}
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              width={500}
              height={500}
              alt={art.title} />
            </a> */}
            
          </div>)
          
        })}
      </div>
    </main>
      )
    }