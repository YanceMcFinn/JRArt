'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import works from './works.json'
import { getLocalData } from '@/lib/localdata'

export async function getStaticParams() {
  const localData = await getLocalData();
  // log in terminal bacause getStaticProps is executed server-side
  console.log(localData); 
  return {
    props: { localData },
  };
}

export default function Home({localData}) {
  
  const paintings = works

  console.log(localData)

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
          <Image src={`/${art.title.replaceAll(" ", "_")}.jpg`}
          
          width={500}
          height={500}
          alt={art.title} /></>)
          
        })}
    </div>
      </main>
      )
    }