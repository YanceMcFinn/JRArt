'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from '../json/works.json'
// import { getLocalData } from '@/lib/localdata'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush } from '@fortawesome/free-solid-svg-icons'

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
    <main className="bg-black text-white mt-20">
      <div className="grid grid-cols-4 gap-7 place-items-center mx-5">
        {paintings.map(art=>{
          return (
          <div className='text-center'>
            <p>{art.title}</p>
            <a href={`/works/${art.title.toLowerCase()}`}  className='mx-auto'>
              <img src={imageSrcs[art.title].default.src}
              className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
              width={500}
              height={500}
              alt={art.title} />
            </a>
          </div>)
          
        })}
      </div>
    </main>
      )
    }