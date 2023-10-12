'use client'

import Image from 'next/image'

export default function About() {
    return(
        <div>
        <Image src={`/images/me.jpg`}
          
        width={300}
        height={445}
        alt="me" />
        <div className='text-main-color title text-3xl'>About the Artist</div>
        </div>
    )
}