import React from 'react'
import SkillButton from '../components/SkillButton'

type Props = {}

export default function Skills({}: Props) {
  return (
     <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center scroll-smooth'>
        <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
        Skills
        </h1>
        <h3 className = 'absolute top-48 text-lg text-white tracking-[3px] font-semibold'>
            What I have to offer
        </h3>
        <div className = 'absolute border-x-0 border-y-[8px] border-white/63 w-[480px] h-[600px]'/> 
        <div className = 'grid grid-cols-4 gap-6'>
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
            <SkillButton />
        </div>
    </div>
  )
}