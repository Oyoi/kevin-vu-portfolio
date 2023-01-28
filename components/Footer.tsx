import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Placeholder from '../images/placeholder.png'

type Props = {}

export default function Footer({}: Props) {
  return (
    <Link href = '#hero'>
        <footer className = 'overflow-hidden sticky bottom-5 w-full cursor-pointer'>
          <div className = 'flex items-center justify-center'>
            <Image 
            src ={ Placeholder } alt = ' '
            className = 'h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'/>
          </div>
        </footer>
      </Link>
  )
}