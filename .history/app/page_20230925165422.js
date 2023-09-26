'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Home() {
  async function getWorks(){
    const works = await fetch("/works.json")
    setPaintings(works.json())
    console.log(paintings)
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