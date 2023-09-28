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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Jan's Art Page!</div>
      <div>
        {paintings.map(art=>{
          return (<><p>{art.title}</p>
          <Image src={`/${art.title.replaceAll(" ", "_")}.jpg`}
          
          width={500}
          height={500}
          alt={art.title} /></>)
          
        })}
    </div>
      </main>
      )
    }