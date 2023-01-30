import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

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
                fgColor = 'white'
                bgColor = 'transparent' />
            <SocialIcon 
                url = 'https://www.linkedin.com/in/kevin-vu-b84833210/'
                fgColor = 'white'
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
          <Link href = '#contact'>
            <SocialIcon
                className = 'cursor-pointer'
                network = 'email'
                fgColor = 'white'
                bgColor = 'transparent' />
              <p className = 
                'uppercase hidden md:inline-flex text-sm text-white'>
                Contact
              </p>
          </Link>
        </motion.div>
    </header>
  )
}