import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Placeholder from '../images/placeholder.png'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className = 'overflow-hidden sticky bottom-5 w-full '>
      <div className = 'text-center text-[12px] font-semibold mb-2 p-0'>
        Boop the snek<br />to return to top
      </div>
      <Link href = '#hero'>
      <div className = 'flex items-center justify-center cursor-pointer'>
        <Image 
        src ={ Placeholder } alt = ' '
        className = 'h-[40px] w-[40px] rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
      </div>
      </Link>
   </footer>
  )
}