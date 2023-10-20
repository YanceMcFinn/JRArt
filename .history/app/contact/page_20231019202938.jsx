'use client'

import Image from 'next/image'

export default function Contact() {
    return(
        <div className='text-main-color text-center justify-content-center mt-20'>
            <div className='title text-center text-2xl'>Contact Me</div>
                <form className='w-2/3 mx-auto'>
                    <div className='flex'>
                        <label for="email">Your email</label>
                        <input type="email" id="email" placeholder="Your email address" required/>
                    </div>
                    <div className='flex'>
                        <label for="subject" >Subject</label>
                        <input type="text" id="subject" placeholder="Let me know what you are asking about!" required/>
                    </div>
                <div class="sm:col-span-2">
              <label for="message" >Your message</label>
              <textarea id="message" rows="6" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
        </div>
    )
}