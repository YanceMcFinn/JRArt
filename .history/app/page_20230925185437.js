'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from '../json/data.json'

export default function Home() {
  async function getWorks(){
    setPaintings(works)
    console.log(works)
  }
  const [paintings, setPaintings] = useState([])

  useEffect(()=>{
    getWorks()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Jan's Art Page!</div>
      <div>
    </div>
      </main>
      )
    }