import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Placeholder from '../images/placeholder.png'
import HeroDec from './HeroDec'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hello there, I'm Kevin.",
            "I'm a CSUSB Alumni.",
            "I don't sleep, I work."
        ],
        loop: true,
        delaySpeed: 1775
    });

    return (
    <div className = 'z-0 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden scroll-smooth'>
        <HeroDec />
        <Image src = {Placeholder} alt = ' ' 
        className = 'rounded-3xl  relative h-32 w-32 object-cover' />
        <div className = 'z-30'>
            <h2 className = 'text-sm text-center justify-center uppercase text-white p-2 tracking-[12px]'>
            Software Engineer
            </h2>
            <h1 className = 'z-20 text-5xl lg:6xl font-semibold mt-4 px-10'>
                <span>{ text }</span>
                <Cursor cursorColor = 'white' />
            </h1>
            <div className = 'pt-7'>
                <Link   href='#about'>
                    <button className = 'uiButton'>About</button>
                </Link>
                <Link   href='#skills'>
                    <button className = 'uiButton'>Skills</button>
                </Link>
                <Link   href='#projects'>
                    <button className = 'uiButton'>Projects</button>
                </Link>
                <Link   href='#contactme'>
                    <button className = 'uiButton'>Contact</button>
                </Link>
            </div>
        </div>
    </div>
  );
}