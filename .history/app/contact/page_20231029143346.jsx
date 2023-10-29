'use client'

import Image from 'next/image'

export default function Contact() {
    return(
        <div className='text-main-color text-center justify-content-center mt-20'>
            <div className='title text-center text-4xl mb-3'>Contact Me</div>
                <form className='w-9/12 mx-auto justify-center'>
                    <div className='w-6/12 mb-2 flex justify-center mx-auto'>
                        <label for="email" className='pr-3 title text-xl'>Your email address</label>
                        <input type="email" className='rounded w-6/12 px-2 bg-white/25 border border-main-color text-main-color placeholder-main-color/50 focus:border-main-color focus:border-2 focus:outline-none focus:ring-0'id="email" placeholder="Your email address" required/>
                    </div>
                    <div className='w-6/12 mb-2 flex justify-center mx-auto'>
                        <label for="subject" className='pr-3 title text-xl'>Subject</label>
                        <input type="text" id="subject" className='rounded w-4/6 px-2 bg-white/25 border border-main-color text-main-color placeholder-main-color/50 focus:border-main-color focus:border-2 focus:outline-none focus:ring-0' placeholder="What are you asking about?" required/>
                    </div>
                    <div className='w-9/12 mx-auto'>
                        <label for="message" className='title text-2xl' >Your message</label><br/>
                        <textarea id="message" rows="6" placeholder="Leave a comment..." className='rounded w-full px-2 mt-2 bg-white/25 border border-main-color text-main-color placeholder-main-color/50 focus:border-main-color focus:border-2 focus:outline-none focus:ring-0'></textarea>
                    </div>
          <button type="submit" className='bg-main-color text-black title text-xl rounded px-4 py-1 mt-2'>Send message</button>
      </form>
        </div>
    )
}