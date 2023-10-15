'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from './works.json'
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

  function randomHexColor(){
    let digits = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','5']
    let hexCodeArr = []
    for(let i=0; i<6; i++){
      let randomDigit = Math.floor(Math.random() * digits.length)
      hexCodeArr.push(digits[randomDigit])
    }
    return hexCodeArr.join("")
  }
paintings.map((art) =>{
  imageSrcs[art.title]=require(`../public/static/img/${art.title.toLowerCase().replaceAll(" ", "_")}.jpg`)
})
console.log(imageSrcs)
  return (
    <main className="bg-black text-white mt-10">
      <div className="grid grid-cols-4 gap-2 place-items-center mx-5">
        {paintings.map(art=>{
          return (
          <div className='text-center'>
            <p>{art.title}</p>
            <a href={`/works/${art.title.toLowerCase()}`}  className='mx-auto'>
              <img src={imageSrcs[art.title].default.src}
              width={500}
              height={500}
              alt={art.title} />
              {/* <FontAwesomeIcon icon={faBrush} size="2xl" style={{color: `#${randomHexColor()}`,}} /> */}
            </a>
          </div>)
          
        })}
      </div>
    </main>
      )
    }