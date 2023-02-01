import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function HeroDec({}: Props) {
  return (
  <motion.div className = 'z-0 relative flex justify-center items-center'
  initial = {{
    opacity: 0
  }}
  animate = {{
    scale: [1, 3, 1],
    opacity: [0.20, 0.40, 0.60],
    borderRadius: ['25%', '50%', '25%']
  }}
  transition = {{
    duration: 1.15
  }}>
    <div className = 'opacity-10 rounded-full absolute border border-purple-800 h-[350px] w-[350px] mt-52 items-center' />
     <div className = 'opacity-20 rounded-full absolute border border-sky-800 h-[560px] w-[560px] mt-52 animate-pulse items-center' />
     <div className = 'opacity-5 rounded-full absolute border  border-gray-600 h-[815px] w-[815px] mt-52 items-center' />
    </motion.div>
  )
}