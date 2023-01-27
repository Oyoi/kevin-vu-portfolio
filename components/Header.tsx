import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className = 'z-20 max-w-6xl mx-auto sticky top-0 p-5 flex items-start justify-between xl:items-center'>
        <motion.div
         className = 'flex flex-row items-center '
         initial = {{
            y: -200,
            opacity: 0,
            scale: 0.5
          }}
          animate = {{
            y: 0,
            opacity: 1,
            scale: 1
          }}
          transition = {{
            duration: 1.15,
          }}
         >
            <SocialIcon 
                url = 'https://github.com/Oyoi'
                fgColor = '#0c4a6e'
                bgColor = 'transparent' />
            <SocialIcon 
                url = 'https://www.linkedin.com/in/kevin-vu-b84833210/'
                fgColor = '#0c4a6e'
                bgColor = 'transparent' />
        </motion.div>
        <motion.div
        className = 'flex flex-row items-center '
        initial = {{
          y: -200,
          opacity: 0,
          scale: 0.5
        }}
        animate = {{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        transition = {{
          duration: 1.15,
        }}>
            <SocialIcon
                className = 'cursor-pointer'
                network = 'email'
                fgColor = '#0c4a6e'
                bgColor = 'transparent' />
            <p className = 
                'uppercase hidden md:inline-flex text-sm text-[#0c4a6e]'>
                Contact
                </p>
        </motion.div>
    </header>
  )
}