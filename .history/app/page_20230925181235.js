'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import { getLocalData } from '../lib/localdata';

export default function Home({ localData }) {
  async function getWorks(){
    const works = await getLocalData()
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
      {localData.map(artwork=>{
        return <p>artwork.title</p>
      })}
      <div>
    </div>
      </main>
      )
    }