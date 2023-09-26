'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from '../json/data.json'

export default function Home() {
  
  const paintings = works

  async function getWorks(){
    
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
          <Image src={`/../public/albedo.jpg`}
          fill={true} /></>)
          
        })}
    </div>
      </main>
      )
    }