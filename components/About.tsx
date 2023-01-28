import { MotionConfig } from 'framer-motion'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className = 'flex flex-col relative h-screen text-center md;text-center md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
      <h1 className = 'absolute top-24 uppercase tracking-[20px] text-white text-2xl'>
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
      }}>
      </motion.img>
    </div>
  )
}