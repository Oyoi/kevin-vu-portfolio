import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft ?: boolean;
    imgLink:string;
    skillName:string;
    proficiency:number;
}

export default function SkillButton({ directionLeft, imgLink, skillName, proficiency }: Props) {
  return (
    <div className = 'group relative flex cursor-pointer'>
        <motion.img
        src = {imgLink} alt = ' '
        className = 'rounded-3xl border border-sky-500/50 object-cover w-24 h-24 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        initial = {{
          x: directionLeft ? 200 : 200,
          opacity: 0
        }}
        transition = {{
          duration: 0.6
        }}
        whileInView = {{
          x: 0,
          opacity: 1
        }} />
        <div className = 'z-0 absolute opacity-0 group-hover:opacity-80 transition-duration-300 ease-in-out group-hover:bg-white h-24 w-24 lg:h-32 lg:w-32 rounded-3xl border'>
            <div className = 'flex items-center justify-center h-full'>
                <p className ='text-xl font-semibold text-black opacity-100'>
                    <span className = 'text-bold text-sky-600'>{skillName}</span>
                    <br />
                    {proficiency}%
                </p>
            </div>
        </div>
    </div>
  )
}