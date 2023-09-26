'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import { getLocalData } from '../lib/localdata';

import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  async function getWorks(){
    // const works = await getLocalData()
    // setPaintings(works.json())
    console.log(paintings)
  }
  const [paintings, setPaintings] = useState(data)

  const { data, error } = useSWR('/api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;

  useEffect(()=>{
    getWorks()
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Jan's Art Page!</div>
      {paintings.map(artwork=>{
        return <p>artwork.title</p>
      })}
      <div>
    </div>
      </main>
      )
    }