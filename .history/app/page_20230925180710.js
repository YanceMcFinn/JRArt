'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getLocalData } from '../lib/localdata';

export async function getStaticProps() {
  const localData = await getLocalData()

  return {
    props: { localData }
  }
}

export default function Home({ localData }) {
  async function getWorks(){
    const works = await fetch('../json/works.json')
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