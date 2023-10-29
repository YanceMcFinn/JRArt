'use client'

import Image from 'next/image'

export default function Contact() {
    return(
        <div className='text-main-color text-center justify-content-center mt-20'>
            <div className='title text-center text-3xl'>Contact Me</div>
                <form className='w-2/3 justify-content-end'>
                    <div className=' mb-2'>
                        <label for="email" className='pr-3 title text-xl'>Your email</label>
                        <input type="email" className='rounded px-2 bg-white/25 border border-main-color text-main-color placeholder-main-color/50 focus:border-main-color focus:border-2 focus:outline-none focus:ring-0'id="email" placeholder="Your email address" required/>
                    </div>
                    <div className='mr-0 mb-2'>
                        <label for="subject" className='pr-3 title text-xl'>Subject</label>
                        <input type="text" id="subject" className='rounded px-2 bg-white/25 border border-main-color text-main-color placeholder-main-color/50 focus:border-main-color focus:border-2 focus:outline-none focus:ring-0' placeholder="Let me know what you are asking about!" required/>
                    </div>
                <div class="sm:col-span-2">
              <label for="message" >Your message</label>
              <textarea id="message" rows="6" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit">Send message</button>
      </form>
        </div>
    )
}