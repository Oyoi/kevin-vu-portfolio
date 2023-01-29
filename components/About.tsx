import { MotionConfig } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth'>
      <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
        About
      </h1>
      <motion.img
      src = ' ' alt = ' '
      className = 'mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-xl md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      initial = {{
        y: -300,
        opacity: 0
      }}
      transition = {{
        duration: 1.15
      }}
      whileInView = {{
        y: 0,
        opacity: 1
      }}
      viewport = {{
        once: true
      }} />

      <div className = 'space-y-10 px-0 md:px-10'>
        <h3 className = 'text-4xl text-white font-semibold'>
          Let&apos;s <span className = 'underlineText'>cut to</span> the <span className = 'underlineText'>chase</span>
        </h3>
        <p className = 'text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

    </div>
  )
}