'use client'

import Image from 'next/image'

export default function About() {
    return(
        <div className='text-main-color text-center'>
            <Image src={`/images/me.jpg`}
            className='mx-auto'
            width={300}
            height={445}
            alt="me" />
            <div>
                <div className='title text-3xl justify-items-center'>About the Artist</div>
                <div>I can’t remember a time when I didn’t want to be an artist. I love playing with color and solving visual puzzles that I have created for myself. I’m always trying to stay out of my own way and allow things to happen spontaneously on the canvas, almost like a form of automatic writing. When everything just flows, it feels wonderful, and the best part is being able to share it with other people.</div>
                <div className='text-4xl title'>---Jan L. Roppo---</div>
            </div>
        </div>
    )
}