'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from './works.json'
import { getLocalData } from '@/lib/localdata'


export default function Home() {
  async function getWorks(){

  }
  const paintings = works
  const [paintings2,setPaintings2] = useState([])

  async function getWorks(){
    art = await getLocalData()
    setPaintings2(art)
    console.log(paintings2)
  }
  useEffect(()=>{
    getWorks()
  }, [])
  return (
    <main className="bg-black text-white">
      <div>Jan's Art Page!</div>
      <div className="grid grid-cols-4 gap 2">
        {paintings.map(art=>{
          return (<div><p>{art.title}</p>
          <Image src={`/${art.title.replaceAll(" ", "_")}.jpg`}
          
          width={500}
          height={500}
          alt={art.title} /></div>)
          
        })}
    </div>
      </main>
      )
    }