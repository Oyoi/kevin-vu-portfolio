import Image from 'next/image'
import kevin1 from '../images/image1.png'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth'>
      <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
        About
      </h1>
      <motion.div
      className = 'mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-xl md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      initial = {{
        y: 300,
        opacity: 0
      }}
      transition = {{
        duration: 1
      }}
      whileInView = {{
        y: 0,
        opacity: 1
      }}
      viewport = {{
        once: true
      }}>
        <Image src = {kevin1} alt = ' ' 
        className = 'absolute mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover md:mb-0 md:rounded-xl md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'/>
      </motion.div>

      <div className = 'space-y-10 px-0 md:px-10'>
        <h3 className = 'text-4xl text-white font-semibold'>
          Let&apos;s <span className = 'underlineText'>cut to</span> the <span className = 'underlineText'>chase</span>
        </h3>
        <p className = 'text-xl text-justify'>
          Hello, I&apos;m Kevin, I have been programming for a little over 6 years. I have always had an interest in technology from a young age and my interest blossomed into passion after I built my first static website in highschool. As I pursued my degree and learned more about my field, I came to love the concept of optimization. Being an avid fan and excelling at math, I enjoy the intricacies of optimizing my code to run as efficiency as possible and proving its time and space complexity, to the limits of my knowledge. On my spare time, I like to indulge myself with the weath of knowledge from books, articles, and videos to further improve my craft.
        </p>
      </div>
    </div>
  )
}