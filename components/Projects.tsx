import React from 'react'

type Props = {}

export default function Projects({}: Props) {
  return (
     <div className = 'z-0 flex flex-col relative h-screen text-center md;text-center md:flex-row px-10 justify-evenly mx-auto items-center scroll-smooth'>
        <h1 className = 'absolute top-24 uppercase tracking-[8px] text-white text-2xl'>
        Projects
        </h1>
        <div className = 'absolute border-x-0 border-y-[12px] border-white/63 max-w-full w-full h-[600px] bg-sky-500 bg-opacity-[47%]'/> 
    </div>
  )
}