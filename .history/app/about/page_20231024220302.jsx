'use client'

import Image from 'next/image'

import Signature from '../../public/static/img/Jan_signature.svg'


export default function About() {
    const artistPhoto = require('../../public/static/img/me.jpg')
    return(
        <div className='text-main-color text-center justify-content-center mt-20 h-[calc(100vh-74px)]'>
            <Image src={artistPhoto}
            className='mx-auto'
            width={280}
            height={400}
            alt="me" />
            <div className='mt-3 w-9/12 mx-auto'>
                <div className='title text-3xl justify-items-center'>About the Artist</div>
                <div className='mb-3'>I can’t remember a time when I didn’t want to be an artist. I love playing with color and solving visual puzzles that I have created for myself. I’m always trying to stay out of my own way and allow things to happen spontaneously on the canvas, almost like a form of automatic writing. When everything just flows, it feels wonderful, and the best part is being able to share it with other people.</div>
                <Signature className="fill-main-color mx-auto pl-20 w-6/12 sm:w-full"/>
            </div>
        </div>
    )
}