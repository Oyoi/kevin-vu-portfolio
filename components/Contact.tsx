import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth'>
        <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
            Contact
        </h1>
        <div className = 'flex flex-col space-y-10'>
            <h3 className = 'text-4xl font-semibold text-center'>
                Need any help? Just&nbsp;
                <span className = 'underlineText'>let me know.</span>
            </h3>
            <div className = 'space-y-8'>
                <div className = 'flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className = 'h-7 w-7' />
                    <p className = 'text-xl'>kvu052099@gmail.com</p>
                </div>
                <div className = 'flex items-center space-x-5 justify-center'>
                    <PhoneIcon className = 'h-7 w-7' />
                    <p className = 'text-xl'>+1 (909) 362-0484</p>
                </div>
            </div>
            <form className = 'flex flex-col space-y-3 w-fit sm:w-[400px] lg:w-[600px] mx-auto'>
                <input placeholder = 'Email' className = 'contactForm' type = 'text ' required />
            <input placeholder = 'Subject' className = 'contactForm' />
            <textarea placeholder = 'Message'  className = 'contactForm sm:h-[200px] lg:h-[300px]' required />
             <button className = 'bg-sky-500/50 py-5 px-10 rounded-lg font-bold text-lg'>
                Submit
             </button>
          </form>
        </div>
    </div>
  );
}